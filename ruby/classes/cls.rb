class Book
  attr_accessor :title, :author, :pages

  def initialize(title, author, pages)
    @title = title
    @author = author
    @pages = pages
  end

  def to_s
    "#{@title} by #{@author}, #{@pages} pages"
  end
end

class Library
  attr_accessor :books

  def initialize
    @books = []
  end

  def add_book(book)
    @books << book
  end

  def list_books
    @books.each { |book| puts book }
  end

  def has_book?(title)
    @books.any? { |book| book.title == title }
  end

  def is_empty?
    @books.empty?
  end

end

# Example usage:
library = Library.new
book1 = Book.new("The Great Gatsby", "F. Scott Fitzgerald", 180)
book2 = Book.new("1984", "George Orwell", 328)

library.add_book(book1)
library.add_book(book2)

library.list_books

book1.title = "The Great Gatsby (Updated Edition)"
library.list_books

puts book1.to_s
puts book2.to_s

puts library.has_book?("1984") ? "Book found!" : "Book not found."
puts library.is_empty? ? "Library is empty." : "Library has books."