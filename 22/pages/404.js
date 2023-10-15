import NavBar from '../components/NavBar';

export default function NotFound() {
  return (
    <div className='container__404'>
      <h1 className='title--main'>404 NOT FOUND</h1>
      <style jsx>{`
        .container__404{
          text-align: center;
        }
        .container__404 .title--main{
          font-size: 40px;
          font-weight: 700;
          margin-top: 20px;
        }
      `}</style>
    </div>    
  );
}