data = {
  users: [
    {
      id: 1,
      name: "Johnny Depp",
      gender: "male",
      avatar: "https://robohash.org/voluptatemautodit.png?size=50x50&set=set1",
      job: "Frontend Engineer",
      email: "johnny.depp@hotlink.com",
      phone: "+62 812 3456 7890",
      address: "Jl. Raya Kebayoran Lama No. 12, Jakarta Selatan",
      birthday: "June 9, 1963",
      website: "https://www.johnnydepp.com",
      about:
        "John Christopher Depp II (born June 9, 1963) is an American actor, producer, and musician. He has been nominated for ten Golden Globe Awards, winning one for Best Actor for his performance of the title role in Sweeney Todd: The Demon Barber of Fleet Street (2007), and has been nominated for three Academy Awards for Best Actor, among other accolades. He is regarded as one of the world's biggest film stars.",
      socials: [
        { name: "facebook", url: "https://www.facebook.com/johnnydepp" },
        { name: "twitter", url: "https://twitter.com/johnnydepp" },
        { name: "instagram", url: "https://www.instagram.com/johnnydepp/" },
      ],
    },
    {
      id: 2,
      name: "Al Pacino",
      gender: "male",
      avatar: "https://robohash.org/eacumqueet.png?size=50x50&set=set1",
      job: "DevOps Engineer",
      email: "all.pacino@hotlink.com",
      phone: "+62 182 7890 3456",
      address: "Jl. Raya Kebayoran Lama No. 12, Jakarta Selatan",
      birthday: "April 25, 1940",
      website: "https://www.alpacino.com",
      about:
        "Alfredo James Pacino (born April 25, 1940) is an American actor and filmmaker. In a career spanning over five decades, he has received many awards and nominations, including an Academy Award, two Tony Awards, and two Primetime Emmy Awards. He is one of the few performers to have received the Triple Crown of Acting. He has also been honored with the AFI Life Achievement Award, the Cecil B. DeMille Award, and the National Medal of Arts.",
      socials: [
        { name: "facebook", url: "https://www.facebook.com/alpacino" },
        { name: "twitter", url: "https://twitter.com/alpacino" },
        { name: "instagram", url: "https://www.instagram.com/alpacino/" },
      ],
    },
  ],
};

const date = new Date(1589892480000);

console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());

