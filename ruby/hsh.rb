codes = {
"a" => 1,
"b" => 2,
"c" => 3,
"d" => 4,
"e" => 5,
"f" => 6,
}

puts codes["a"]
puts codes["b"]
puts codes["c"] + codes["d"]

puts codes.keys()
puts codes.values()

puts codes.length()
puts codes.size()
puts codes.empty?()
puts codes.include?("a")
puts codes.include?("z")
puts codes.has_key?("a")
puts codes.has_key?("z")
puts codes.has_value?(1)
puts codes.has_value?(0)

puts codes.to_a()