import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="#" class="title">
                  tasty and refreshing spices
                </a>
                <span>by Rach / 21st June, 2024</span>
                <p>
                  Mixing traditional cooking styles with new global flavors has
                  led to exciting fusion cuisines. For example, Korean BBQ tacos
                  or sushi burritos bring together elements from two distinct
                  cultures.
                </p>
                <a href="#" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
