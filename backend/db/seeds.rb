# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.destroy_all 
Owner.destroy_all

adam = Owner.create(name:'Adam')
jessica = Owner.create(name:'Jessica')
diana = Owner.create(name:'Diana')


Card.create(name: 'Charles Darwin', description: 'Evolution', owner: jessica)
Card.create(name: 'Albert Einstein', description: 'Theoretical Physicist', owner: adam)
Card.create(name: 'Stephen Hawking', description: 'Theoretical Physicist', owner: diana)
Card.create(name: 'Galileo Galilei', description: 'Astronomer', owner: adam)
Card.create(name: 'Isaac Newton', description: 'Scientist/Mathematician', owner: diana)
Card.create(name: 'Nicolaus Copernicus', description: 'Scientist/Mathematician', owner: jessica)
Card.create(name: 'Louis Pasteur', description: 'Biologist', owner: diana)
Card.create(name: 'Rosalind Franklin', description: 'Chemist', owner: jessica)
Card.create(name: 'Neils Bohr', description: 'Physicist', owner: diana)
Card.create(name: 'Max Planck', description: 'Physicist', owner: jessica)
Card.create(name: 'Rachel Carson', description: 'Marine Biologist', owner: diana)
Card.create(name: 'James Watson', description: 'Molecular Biologist', owner: adam)
Card.create(name: 'Johannes Kepler', description: 'Astronomer', owner: adam)
Card.create(name: 'Carl Sagan', description: 'Astronomer', owner: jessica)
Card.create(name: 'Antoine Lavoisier', description: 'Chemist', owner: diana)
Card.create(name: 'Alexander Fleming', description: 'Biologist', owner: jessica)
Card.create(name: 'Carl Linnaeus', description: 'Botanist', owner: adam)
Card.create(name: 'Neil deGrasse Tyson', description: 'Astrophysicist', owner: jessica)
Card.create(name: 'Dmitri Mendeleev', description: 'Chemist', owner: diana)
Card.create(name: 'Enrico Fermi', description: 'Physicist', owner: jessica)
Card.create(name: 'Mary Anning', description: 'Palaeontologist', owner: diana)
Card.create(name: 'James Prescott Joule', description: 'Physicist', owner: jessica)
Card.create(name: 'Werner Heisenberg', description: 'Physicist', owner: diana)
Card.create(name: 'Blaise Pascal', description: 'Scientist/Mathematician', owner: jessica)
Card.create(name: 'Alessandro Volta', description: 'Physicist', owner: adam)
Card.create(name: 'Gertrude Elion', description: 'Biochemist', owner: jessica)
Card.create(name: 'Chien-Shiung Wu', description: 'Physicist', owner: adam)
Card.create(name: 'Dorothy Hodgkin', description: 'Biological Chemist', owner: diana)
Card.create(name: 'Lise Meitner', description: 'Physicist', owner: jessica)
Card.create(name: 'Emmy Noether', description: 'Scientist/Mathematician', owner: adam)
Card.create(name: 'Vera Rubin', description: 'Astronomer', owner: diana)
Card.create(name: 'Katherine Johnson', description: 'Scientist/Mathematician', owner: adam)
Card.create(name: 'Gerty Cori', description: 'Biochemist', owner: diana)
Card.create(name: 'Nettie Stevens', description: 'Geneticist', owner: diana)
Card.create(name: 'Inge Lehmann', description: 'Seismologist', owner: adam)


Card.create(name: 'Jessica Montano', description: 'Beautiful Biologist', owner: adam)
Card.create(name: 'Ahmed', description: 'Crackhead Chemist', owner: diana)
Card.create(name: 'Adam Chernitsky', description: 'Awesome Astrophysicist', owner: jessica)
Card.create(name: 'Diana', description: 'Brainy Botanist', owner: diana)
