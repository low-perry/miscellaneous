phrase = "Dario here"
st = 2
ed = 5
puts phrase.upcase()
puts phrase.downcase()
puts phrase.strip()
puts phrase.length()
puts phrase.include? "Dario"
puts phrase.include? "dario"
puts phrase[0]
puts phrase[0, 3]
puts phrase.index("Dario")
puts phrase.index("dario")
puts phrase.index("Dario") != nil
puts phrase.index("dario") != nil
puts phrase.index("Dario") != nil ? "Dario is here" : "Dario is not here"
puts phrase.index("dario") != nil ? "Dario is here" : "Dario is not here"
puts phrase[st, ed]