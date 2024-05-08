export const restaurantMenu = {
    appetizers: [
      {
        name: 'Bruschetta',
        price: 8.99,
        description: 'Freshly toasted bread topped with tomatoes, basil, garlic, and olive oil.',
        picture: '${process.env.PUBLIC_URL}/bruschetta.png'
      },
      {
        name: 'Spinach Artichoke Dip',
        price: 9.99,
        description: 'Creamy spinach and artichoke dip served with warm tortilla chips.',
        picture: '${process.env.PUBLIC_URL}/Spinach-Artichoke-Dip.png'
      },
      {
        name: 'Mozzarella Sticks',
        price: 7.99,
        description: 'Golden fried mozzarella cheese sticks served with marinara sauce.',
        picture: '${process.env.PUBLIC_URL}/mozz2.png'
      }
    ],
    salads: [
      {
        name: 'Caesar Salad',
        price: 10.99,
        description: 'Crisp romaine lettuce, croutons, parmesan cheese, and creamy Caesar dressing.',
        picture: '${process.env.PUBLIC_URL}/ceasar.png'
      },
      {
        name: 'Greek Salad',
        price: 11.99,
        description: 'Tomatoes, cucumbers, red onions, feta cheese, and Kalamata olives with a Greek vinaigrette.',
        picture: '${process.env.PUBLIC_URL}/greek-salad.png'
      },
      {
        name: 'Caprese Salad',
        price: 12.99,
        description: 'Fresh mozzarella, ripe tomatoes, basil leaves, and balsamic glaze.',
        picture: '${process.env.PUBLIC_URL}/kisspng-caprese-salad.png'
      }
    ],
    entrees: [
      {
        name: 'Grilled Salmon',
        price: 19.99,
        description: 'Fresh salmon fillet grilled to perfection and served with seasonal vegetables and rice pilaf.',
        picture: '${process.env.PUBLIC_URL}/salmon.png'
      },
      {
        name: 'Beef Stroganoff',
        price: 16.99,
        description: 'Tender beef strips in a creamy mushroom sauce, served over egg noodles.',
        picture: '${process.env.PUBLIC_URL}/stroganoff.png'
      },
      {
        name: 'Chicken Alfredo',
        price: 15.99,
        description: 'Grilled chicken breast served over fettuccine pasta with creamy Alfredo sauce.',
        picture: '${process.env.PUBLIC_URL}/alfredo.png'
      }
    ],
    desserts: [
      {
        name: 'Chocolate Lava Cake',
        price: 7.99,
        description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.',
        picture: '${process.env.PUBLIC_URL}/fudge.png'
      },
      {
        name: 'New York Cheesecake',
        price: 6.99,
        description: 'Classic New York-style cheesecake with a graham cracker crust and berry compote.',
        picture: '${process.env.PUBLIC_URL}/cheesecake.png'
      },
      {
        name: 'Tiramisu',
        price: 8.99,
        description: 'Layers of espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder.',
        picture: '${process.env.PUBLIC_URL}/tiramisu.png'
      }
    ],
    drinks: [
      {
        name: 'Mojito',
        price: 8.99,
        description: 'Refreshing cocktail made with rum, fresh mint, lime juice, sugar, and soda water.',
        picture: '${process.env.PUBLIC_URL}/mojito.png'
      },
      {
        name: 'Iced Tea',
        price: 2.99,
        description: 'Chilled black tea served over ice with a slice of lemon.',
        picture: '${process.env.PUBLIC_URL}/ice.png'
      },
      {
        name: 'Coke',
        price: 1.99,
        description: 'Crispy, refreshing carbonated soft drink.',
        picture: '${process.env.PUBLIC_URL}/coke.png'
      }
    ]
  };
  
  export default restaurantMenu;