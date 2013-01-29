require 'rubygems'

begin
  require 'wirble'

  # init wirble
  Wirble.init
  Wirble.colorize
rescue LoadError => err
  $stderr.puts "Couldn't load Wirble. You may need to add it to your project's Gemfile."
end
