friends = ["kivi", "angie", "jani", "genta", "tiny", "alda"]

for friend in friends
  puts "My friend is: #{friend}"
end
puts "------------------"

for index in 0..friends.length - 1
  puts "My friend is: #{friends[index]}"
end

puts "------------------"
friends.each do |friend|
  puts "My friend is: #{friend}"
end
puts "------------------"

i = 0
while i < friends.length()
  puts "My friend is: #{friends[i]}"
  i += 1
end

puts "------------------"
friends.length.times do |i|
  puts "My friend is: #{friends[i]}"
end
