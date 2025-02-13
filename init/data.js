const listings = [
    {
      title: "Cozy Cottage in the Woods",
      description: "A charming retreat surrounded by serene nature.",
      image: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 120,
      location: "Asheville",
      country: "USA",
    },
    {
      title: "Modern Apartment with City View",
      description: "Spacious apartment with stunning city skyline views.",
      image: "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
      price: 200,
      location: "New York",
      country: "USA",
    },
    {
      title: "Beachfront Villa",
      description: "Relax and unwind in this luxurious beachfront villa.",
      image: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 350,
      location: "Malibu",
      country: "USA",
    },
    {
      title: "Mountain Cabin Escape",
      description: "Rustic cabin with breathtaking mountain views.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 150,
      location: "Denver",
      country: "USA",
    },
    {
      title: "Luxury Downtown Loft",
      description: "Stylish loft in the heart of downtown.",
      image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 250,
      location: "Los Angeles",
      country: "USA",
    },
    {
      title: "Charming Countryside Cottage",
      description: "Perfect for a peaceful getaway.",
      image: "https://images.unsplash.com/photo-1439130490301-25e322d88054?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 100,
      location: "Oxford",
      country: "UK",
    },
    {
      title: "Secluded Lakehouse",
      description: "Private lakehouse with stunning views.",
      image: "https://unsplash.com/photos/a-large-white-building-with-lots-of-windows-zWnPoFMTXCs",
      price: 300,
      location: "Lake Tahoe",
      country: "USA",
    },
    {
      title: "Romantic Paris Apartment",
      description: "Cozy and elegant apartment in Paris.",
      image: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 220,
      location: "Paris",
      country: "France",
    },
    {
      title: "Chic Studio in Tokyo",
      description: "Modern and compact studio in the heart of Tokyo.",
      image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 180,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Private Island Retreat",
      description: "Exclusive island experience with luxury amenities.",
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1000,
      location: "Bahamas",
      country: "Bahamas",
    },
    {
      title: "Eco-Friendly Treehouse",
      description: "Unique eco-friendly treehouse experience.",
      image: "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 130,
      location: "Portland",
      country: "USA",
    },
    {
      title: "Scenic Scottish Highlands Lodge",
      description: "Charming lodge with panoramic views.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 170,
      location: "Highlands",
      country: "Scotland",
    },
    {
      title: "Desert Glamping Site",
      description: "Luxurious camping experience in the desert.",
      image: "https://images.unsplash.com/photo-1622396089527-b40d16c63aba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 200,
      location: "Joshua Tree",
      country: "USA",
    },
    {
      title: "Historic Castle Stay",
      description: "Live like royalty in this authentic castle.",
      image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3De",
      price: 500,
      location: "Edinburgh",
      country: "Scotland",
    },
    {
      title: "Modern Family Home",
      description: "Perfect for families with spacious living areas.",
      image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 300,
      location: "San Diego",
      country: "USA",
    },
    {
      title: "Tropical Bungalow",
      description: "Relax in paradise with this tropical retreat.",
      image: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 220,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Urban Penthouse",
      description: "Luxurious penthouse with amazing city views.",
      image: "https://as2.ftcdn.net/v2/jpg/02/49/89/03/1000_F_249890395_F4EmPoqhst9qOsHe8j2wQ2Es7ylkTBoY.jpg",
      price: 400,
      location: "Chicago",
      country: "USA",
    },
    {
      title: "Vintage Camper Van",
      description: "Explore on wheels with this unique camper.",
      image: "https://as1.ftcdn.net/v2/jpg/00/62/59/70/1000_F_62597035_kJTkSPZm9P10OGfpkWDX5iHlByaruMUV.jpg",
      price: 90,
      location: "Seattle",
      country: "USA",
    },
    {
      title: "Idyllic Village Home",
      description: "Charming home in a peaceful village setting.",
      image: "https://as2.ftcdn.net/v2/jpg/03/14/18/93/1000_F_314189357_XfwtOLZy1dEJr1J5V3bV8BlqfgDBvbbI.jpg",
      price: 140,
      location: "Cotswolds",
      country: "UK",
    },
    {
      title: "Snowy Mountain Chalet",
      description: "Cozy and warm chalet in a snowy paradise.",
      image: "https://as2.ftcdn.net/v2/jpg/03/60/65/13/1000_F_360651309_Lfrzg2PwkcMtmRYW8DDOZSiDU3TMTDff.jpg",
      price: 250,
      location: "Aspen",
      country: "USA",
    },
    {
      title: "Ocean View Penthouse",
      description: "Luxury living with breathtaking ocean views.",
      image: "https://as1.ftcdn.net/v2/jpg/05/94/79/92/1000_F_594799219_EeHUKZVEucffoHeKimBsi9gPDSsSqxaL.jpg",
      price: 450,
      location: "Sydney",
      country: "Australia",
    },
    {
      title: "Rustic Barn Conversion",
      description: "Unique stay in a renovated barn.",
      image: "https://unsplash.com/photos/barn",
      price: 180,
      location: "Somerset",
      country: "UK",
    },
    {
      title: "Mediterranean Villa",
      description: "Experience luxury with Mediterranean vibes.",
      image: "https://as2.ftcdn.net/v2/jpg/00/48/05/67/1000_F_48056772_4xzGQerR7lW82z7MPTN8AulMraNIOZEJ.jpg",
      price: 330,
      location: "Santorini",
      country: "Greece",
    },
    {
      title: "Safari Tent Experience",
      description: "Get close to nature with this unique safari stay.",
      image: "https://unsplash.com/photos/safari-tent",
      price: 270,
      location: "Serengeti",
      country: "Tanzania",
    },
    {
      title: "Traditional Ryokan",
      description: "Experience Japanese hospitality in a traditional ryokan.",
      image: "https://as1.ftcdn.net/v2/jpg/06/19/00/08/1000_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
      price: 210,
      location: "Kyoto",
      country: "Japan",
    },
    
  ];
  
  module.exports = {data: listings};