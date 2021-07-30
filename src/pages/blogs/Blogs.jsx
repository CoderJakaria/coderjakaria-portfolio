import React from "react";
import BlogsBoxes from "../../components/blogsBoxes/BlogsBoxes";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div id="blogs" className="blogs">
      <div className="blogs__headerText">
        <h2 className="blogs__title">My Blogs</h2>
        <p>
          I write some blogs of our most common question. And i try to explain
          easily. I hope you will like this.
        </p>
      </div>
      <div className="blogs__boxes">
        <BlogsBoxes
          imageURL="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Why React JS is famouse?"
          timestamp="May. 21,2021"
          comments={10}
          description="Why react js is so powerfull and how its work and why its so easy"
        />
        <BlogsBoxes
          imageURL="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="What is NPM ?"
          timestamp="June. 3,2021"
          comments={5}
          description="What is NPM what we use for? what is reletion between react and NPM?"
        />
        <BlogsBoxes
          imageURL="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="What is Meterial-UI ?"
          timestamp="June. 20,2021"
          comments={19}
          description="why meterial-ui when we have library like bootstap. and how to use it"
        />
      </div>

      <div
        className="blogs__hireMeSection"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
        }}
      >
        <div className="blogs__hireMeInfo">
          <h1>
            I'm <span>Available</span> for freelancing
          </h1>
          <p>
            For work with me you can hire me. You can contact with me in contact
            section.
          </p>
          <a href="#">HIRE ME</a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
