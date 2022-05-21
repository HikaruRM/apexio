import './QandA.css';

function faq() {
  return (
    <>
      <h1 className={"title"}>Frequently asked questions</h1>
      <div className={"div-text"}>
        <p className={"Question"}>Why are you the number one store in europe?</p>
        <p className={"answer"}>Because we said so</p>
        <p className={"Question"}>How do I order your product?</p>
        <p className={"answer"}>To take an order you must email or call us</p>
        <p className={"answer"}>We do this for security reasons</p>
        <p className={"Question"}>Are your products safe?</p>
        <p className={"answer"}>86% of the time the products are safe, but there are instances of accessories exploding</p>
        <p className={"Question"}>What are the shipping fees?</p>
        <p className={"answer"}>We have two options:</p>
        <p className={"answer"}>Free shipping, takes up to 365 days to ship</p>
        <p className={"answer"}>Premium shipping, ships within 2 days and costs 500€</p>
        <p className={"Question"}>How long did it take to make this website?</p>
        <p className={"answer"}>Around 2 weeks</p>
        <p className={"Question"}>What are you using to make this website?</p>
        <p className={"answer"}>Website is made with react.js, node.js and express.js frameworks</p>
      </div>
    </>
  );
}

export default faq;
