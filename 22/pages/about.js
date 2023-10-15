export default function about() {
  return (
    <div>
      <div className='container--about'>
        <h1>About Us</h1>
        <p>Welcome to the official explorer The New York Times Best Seller list explorer.</p>
        <p>We hope you enjoy your stay!</p>
      </div>      
      <style jsx>{`
        .container--about{
          width: 640px;
          margin: 0 auto;
          padding: 30px 40px;
          background-color: #fff;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 20px 60px -20px,
            rgba(0, 0, 0, 0.3) 0px 10px 60px -30px;
        }
        .container--about h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }
        .container--about p {
          font-size: 15px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
}