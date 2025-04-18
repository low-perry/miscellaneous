class Chef
  def make_dinner
    puts "Chef is making dinner!"
  end

  def make_dessert
    puts "Chef is making dessert!"
  end

  def make_salad
    puts "Chef is making salad!"
  end
end

class ItalianChef < Chef
  def make_pasta
    puts "Chef is making pasta!"
  end

  def make_pizza
    puts "Chef is making pizza!"
  end
end

chef = Chef.new()
chef.make_dinner()
chef.make_dessert()
chef.make_salad()

italian_chef = ItalianChef.new()
italian_chef.make_dinner()
italian_chef.make_dessert()
italian_chef.make_salad()
italian_chef.make_pasta()
italian_chef.make_pizza()