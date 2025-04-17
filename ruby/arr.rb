friends = Array["kivi", "angie", "jani", "genta", "tiny", "alda"]
puts "My friends are: #{friends}"
puts "My friends are: #{friends.join(", ")}"
puts "My friends are: #{friends.join(" and ")}"
puts friends[-1]
puts friends[0..2]
puts friends[0...2]
puts friends[0, 2]
puts friends.length()
puts friends.size()

def binary_search(arr, target)
  low = 0
  high = arr.length - 1

  while low <= high
    mid = low + (high - low) / 2
    if arr[mid] == target
      return mid
    elsif arr[mid] < target
      low = mid + 1
    else
      high = mid - 1
    end
  end

  return -1
end

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 5
result = binary_search(arr, target)
if result != -1
  puts "Element found at index #{result}"
else
  puts "Element not found in the array"
end
