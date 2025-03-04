import React, { useState } from 'react';
import Header from '../Home/Header/Header';
import HeroSection from '../Home/HeroSection/HeroSection';
import CardSection from '../Home/CardSection/CardSection';
import Footer from '../Home/Footer/Footer';


export default function Home() {
    const [blogList] = useState([
        {
          id: 1,
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
          blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
          title: "Gladis Lennon",
          dept: "Head of SEO",
        },
        {
          id: 2,
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
          blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
          title: "Gladis Lennon",
          dept: "Head of SEO",
        },
        {
          id: 3,
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
          blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
          title: "Gladis Lennon",
          dept: "Head of SEO",
        },
        {
          id: 4,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
          blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
          title: "Gladis Lennon",
          dept: "Head of SEO",
        },
        {
          id: 5,
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
          blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
          title: "Gladis Lennon",
          dept: "Head of SEO",
        },
        {
          id: 6,
          content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.",
          blogImg: "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
          title: "Gladis Lennon",
          dept: "Head of SEO",
        },
      ]);
      
      const [CardList] = useState([
          {
            "id":1,
            "quote": "The only way to do great work is to love what you do.",
            "writer": "Steve Jobs"
          },
          {
            "id":2,
            "quote": "In the middle of every difficulty lies opportunity.",
            "writer": "Albert Einstein"
          },
          {
            "id":3,
            "quote": "It does not matter how slowly you go as long as you do not stop.",
            "writer": "Confucius"
          },
          {
            "id":4,
            "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "writer": "Winston Churchill"
          },
          {
            "id":5,
            "quote": "Believe you can and you're halfway there.",
            "writer": "Theodore Roosevelt"
          },
          {
            "id":6,
            "quote": "Do what you can, with what you have, where you are.",
            "writer": "Theodore Roosevelt"
          },
          {
            "id":7,
            "quote": "Happiness depends upon ourselves.",
            "writer": "Aristotle"
          },
          {
            "id":8,
            "quote": "Don't watch the clock; do what it does. Keep going.",
            "writer": "Sam Levenson"
          },
          {
            "id":9,
            "quote": "The future depends on what you do today.",
            "writer": "Mahatma Gandhi"
          },
          {
            "id":10,
            "quote": "Act as if what you do makes a difference. It does.",
            "writer": "William James"
          },
          {
            "id":11,
            "quote": "Dream big and dare to fail.",
            "writer": "Norman Vaughan"
          },
          {
            "id":12,
            "quote": "You are never too old to set another goal or to dream a new dream.",
            "writer": "C.S. Lewis"
          },
          {
            "id":13,
            "quote": "Everything you’ve ever wanted is on the other side of fear.",
            "writer": "George Addair"
          },
          {
            "id":14,
            "quote": "Opportunities don't happen. You create them.",
            "writer": "Chris Grosser"
          },
          {
            "id":15,
            "quote": "Life isn’t about getting and having, it’s about giving and being.",
            "writer": "Kevin Kruse"
          },
          {
            "id":16,
            "quote": "An unexamined life is not worth living.",
            "writer": "Socrates"
          },
          {
            "id":17,
            "quote": "Strive not to be a success, but rather to be of value.",
            "writer": "Albert Einstein"
          },
          {
            "id":18,
            "quote": "I attribute my success to this: I never gave or took any excuse.",
            "writer": "Florence Nightingale"
          },
          {
            "id":19,
            "quote": "You miss 100% of the shots you don’t take.",
            "writer": "Wayne Gretzky"
          },
          {
            "id":20,
            "quote": "Do or do not. There is no try.",
            "writer": "Yoda"
          }
        ]);

  return (
    <div>
        <Header />
        <HeroSection />
            
            <div className="card-grid">
                {blogList.map((blog) => (
                    <CardSection key={blog.id} blog={blog} />
                ))}
            </div>

            <Footer />     
    </div>
          );
}
