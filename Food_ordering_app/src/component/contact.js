const Contact = () => {
  return (
    <div > 
      <h1 className="text-3xl text-center p-2 m-2">Contact Us</h1>
      <form className="text-center  ">
        <input className=" border border-black p-2 m-2 items-center" type="text" placeholder="Enter the Name"/>

        <input className=" border border-black p-2 m-2" type="text" placeholder="Enter the Message"/>

        <input className=" p-2 m-2 bg-black rounded-xl text-white" type="submit" placeholder="Submit"/>
      </form>
    </div>
  );
};
export default Contact;
