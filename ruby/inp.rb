puts "Enter your name: "
name = gets
name = name.chomp()
puts "Hello #{name}"
puts "Enter your age: "
age = gets
age = age.chomp()
age = age.to_i
puts "You are #{age} years old"
puts "You are going to be #{age + 1} years old next year"
puts "You were #{age - 1} years old last year"

def try_parse_int(str)
  begin
    Integer(str)
  rescue ArgumentError
    nil
  end
end

dodo = try_parse_int("dodo")
puts dodo != nil ? "dodo is an integer" : "dodo is not an integer"
