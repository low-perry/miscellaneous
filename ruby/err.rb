nums = [1, 2, 3, 45, 6 , 78]

def sort(arr, l, r)
  return if l >= r

  mid = l + (r - l) / 2

  sort(arr, l, mid)
  sort(arr, mid + 1, r)
  merge(arr, l, mid, r)
end

def merge(arr, l, mid, r)
  size1 = mid - l + 1
  size2 = r - mid

  left = Array.new(size1)
  right = Array.new(size2)

(0...size1).each do |i|
  left[i] = arr[l + i]
end

(0...size2).each do |i|
  right[i] = arr[mid + 1 + i]
end

  i = 0
  j = 0
  k = l

  while i < size1 && j < size2 do
    if left[i] <= right[j]
      arr[k] = left[i]
      i += 1
    else
      arr[k] = right[j]
      j += 1
    end
    k += 1
  end

  while i < size1 do
    arr[k] = left[i]
    i += 1
    k += 1
  end

  while j < size2 do
    arr[k] = right[j]
    j += 1
    k += 1
  end
end

sort(nums, 0, nums.length - 1)
puts "Sorted array: #{nums.join(", ")}"

begin
  num = 10 / 0
  puts "Result: #{num}"
rescue
  puts "Error: Division by zero is not allowed."
end