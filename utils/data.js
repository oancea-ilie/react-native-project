import images from "./images";

const DATA = [

    {
        id: "1",
        name: "London apartment",
        creator: "Putri Intan",
        price: 180,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper dui in quam tincidunt molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis sapien a felis lacinia, sed porta orci ultricies. Proin ultrices neque sit amet lorem egestas viverra. Nam pellentesque ipsum at quam.",
        image: images.londonApartment,
        reservations: [
          {
            id: "R-1",
            name: "Jessica Tan",
            price: 210,
            image: images.person02,
            date: "January  10, 2022 at 12:10 AM",
          },
          {
            id: "R-2",
            name: "Jennifer Sia",
            price: 230,
            image: images.person03,
            date: "February 27, 2022 at 01:50 AM",
          },
          {
            id: "R-3",
            name: "Rosie Wong",
            price: 250,
            image: images.person04,
            date: "May  15, 2022 at 03:50 AM",
          },
        ],
    },

    {
      id: "2",
      name: "Dubai apartment",
      creator: "Oancea Ilie",
      price: 300,
      description:
        "Nullam porttitor diam ut est luctus porttitor. Nullam auctor lectus ut facilisis laoreet. Mauris eu cursus nisl, in tristique purus. Sed imperdiet tristique sagittis. Pellentesque lacinia felis a lorem vestibulum dignissim. Nulla vitae nibh lectus. Nunc luctus sagittis quam nec lacinia. Aliquam commodo accumsan metus eu luctus. Morbi pellentesque tempus porttitor. Morbi a euismod nisi.Curabitur gravida scelerisque diam vel tincidunt. Ut nisi ante, cursus et leo at, sodales mollis lectus. Donec a mi egestas eros imperdiet commodo. Nam id eleifend sem, quis volutpat ex. Cras auctor quis leo eu aliquam. Suspendisse rhoncus varius augue vulputate semper. Ut porta risus eget vestibulum fringilla. Quisque at dolor tempus, pharetra lacus et, congue velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: images.dubaiApartment,
      reservations: [
        {
          id: "R-1",
          name: "Jessica Tan",
          price: 320,
          image: images.person02,
          date: "December 03, 2022 at 10:03 AM",
        },
        {
          id: "R-2",
          name: "Jennifer Sia",
          price: 330,
          image: images.person03,
          date: "July  25, 2022 at 09:53 AM",
        },
        {
          id: "R-3",
          name: "Rosie Wong",
          price: 350,
          image: images.person04,
          date: "June  26, 2022 at 08:12 AM",
        },
        {
          id: "R-4",
          name: "Arthur Taylor",
          price: 335,
          image: images.person01,
          date: "June  25, 2022 at 08:15 AM",
        },
      ],
    },

    {
      id: "3",
      name: "Sibiu apartment",
      creator: "Dan Popescu",
      price: 55,
      description:
        "Nam diam sapien, aliquam quis euismod id, feugiat eget dui. Fusce dignissim maximus luctus. Suspendisse laoreet bibendum nisl nec pretium. Etiam eu risus lobortis, rhoncus urna vitae, accumsan risus. Integer id vehicula ipsum, quis elementum orci. Praesent tincidunt varius leo. Nulla orci urna, dictum nec est et, ultricies vestibulum augue. Praesent pharetra enim nec velit maximus tincidunt. Proin mattis dolor a urna gravida, consequat bibendum sem congue. Sed venenatis, lectus euismod hendrerit euismod, neque massa posuere nibh, in condimentum erat lorem in nibh. Aenean scelerisque in arcu sagittis dignissim. Nam porttitor placerat gravida. Suspendisse potenti.",
      image: images.sibiuApartment,
      reservations: [
        {
          id: "R-1",
          name: "Jessica Tan",
          price: 70,
          image: images.person02,
          date: "July 18, 2022 at 10:03 AM",
        },
        {
          id: "R-2",
          name: "Jennifer Sia",
          price: 75,
          image: images.person03,
          date: "August 27, 2022 at 11:41 AM",
        },
        {
          id: "R-3",
          name: "Rosie Wong",
          price: 80,
          image: images.person04,
          date: "March 13, 2022 at 9:58 AM",
        },
        {
          id: "R-4",
          name: "Arthur Taylor",
          price: 86,
          image: images.person01,
          date: "March 13, 2022 at 9:58 AM",
        },
        {
          id: "R-5",
          name: "Cash Payne",
          price: 90,
          image: images.person05,
          date: "March 15, 2022 at 9:51 AM",
        },
      ],
    },

    {
      id: "4",
      name: "New York apartment",
      creator: "Cillian Murphy",
      price: 210,
      description:
        "Nulla interdum mi nec libero mollis, nec rutrum ex porta. Nam augue tortor, semper non mi at, aliquet accumsan tortor. Integer sollicitudin tellus sit amet libero elementum eleifend. Vestibulum fermentum nibh vitae pulvinar luctus. Cras feugiat magna nisi, et cursus odio porttitor ut. Nulla ante metus, aliquam quis leo ac, facilisis posuere sapien. Nam ipsum justo, suscipit ut diam non, congue porttitor ligula. Aenean condimentum sed lorem a dictum.",
      image: images.newYorkApartment,
      reservations: [
        {
          id: "R-4",
          name: "Arthur Taylor",
          price: 265,
          image: images.person01,
          date: "November 21, 2022 at 1:01 AM",
        },
        
        {
          id: "R-1",
          name: "Jessica Tan",
          price: 230,
          image: images.person02,
          date: "April 16, 2022 at 12:14 AM",
        },
        {
          id: "R-2",
          name: "Jennifer Sia",
          price: 250,
          image: images.person03,
          date: "March 27, 2022 at 11:24 AM",
        },
        {
          id: "R-3",
          name: "Rosie Wong",
          price: 245,
          image: images.person04,
          date: "November 29, 2022 at 1:01 AM",
        },
      ],
    },
    
    {
      id: "5",
      name: "Berlin apartment",
      creator: "Leon Müller",
      price: 130,
      description:
        "Nam accumsan rutrum massa, sodales luctus ipsum consequat ac. Aenean iaculis tristique ornare. Integer eu metus ut libero tincidunt pellentesque ut et dolor. Sed tincidunt non purus eget molestie.",
      image: images.berlinApartment,
      reservations: [
        {
          id: "R-5",
          name: "Cash Payne",
          price: 160,
          image: images.person05,
          date: "March 03, 2022 at 07:11 AM",
        },
        {
          id: "R-6",
          name: "Braxton Schultz",
          price: 145,
          image: images.person06,
          date: "July 05, 2022 at 07:11 AM",
        },
        {
          id: "R-4",
          name: "Arthur Taylor",
          price: 150,
          image: images.person01,
          date: "August 02, 2022 at 07:11 AM",
        },
        {
          id: "R-1",
          name: "Jessica Tan",
          price: 163,
          image: images.person02,
          date: "August 01, 2022 at 07:11 AM",
        },
        {
          id: "R-2",
          name: "Jennifer Sia",
          price: 170,
          image: images.person03,
          date: "July 08, 2022 at 7:43 AM",
        },
        {
          id: "R-3",
          name: "Rosie Wong",
          price: 190,
          image: images.person04,
          date: "October 05, 2022 at 12:23 AM",
        },
      ],
    },
    {
      id: "6",
      name: "Madrid apartment",
      creator: "Shelby Hoover",
      price: 240,
      description:
        "Nam accumsan rutrum massa, sodales luctus ipsum consequat ac. Aenean iaculis tristique ornare. Integer eu metus ut libero tincidunt pellentesque ut et dolor. Sed tincidunt non purus eget molestie.",
      image: images.madridPartment,
      reservations: [
        {
          id: "R-5",
          name: "Cash Payne",
          price: 270,
          image: images.person05,
          date: "March 01, 2022 at 07:11 AM",
        },
        {
          id: "R-6",
          name: "Braxton Schultz",
          price: 300,
          image: images.person06,
          date: "July 07, 2022 at 07:11 AM",
        },
        {
          id: "R-1",
          name: "Jessica Tan",
          price: 255,
          image: images.person02,
          date: "August 11, 2022 at 07:11 AM",
        },
        {
          id: "R-4",
          name: "Arthur Taylor",
          price: 250,
          image: images.person01,
          date: "August 05, 2022 at 07:11 AM",
        },
      ],
    },
]

export {DATA};