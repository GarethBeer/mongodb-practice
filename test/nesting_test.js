const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author");

describe("Nesting records", () => {
	it("creates an author with sub-documents", done => {
		let Lee = new Author({
			name: "Lee Child",
			age: 56,
			books: [{ title: "Reacher", pages: 400 }]
		});

		Lee.save().then(() => {
			Author.findOne({
				name: "Lee Child"
			}).then(result => {
				assert(result.books.length === 1);
				done();
			});
			done();
		});
	});
	it("adds a book to an author", done => {
		let Lee = new Author({
			name: "Lee Child",
			age: 56,
			books: [{ title: "Reacher", pages: 400 }]
		});
		Lee.save().then(() => {
			Author.findOne({ name: "Lee Child" }).then(result => {
				result.books.push({ title: "Death Man Reacher", pages: 300 });
				result.save().then(() => {
					Author.findOne({ name: "Lee Child" }).then(result => {
						assert(result.books.length === 2);
						done();
					});
					done();
				});
			});
		});
	});
});
