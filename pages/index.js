import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home(props) {
  console.log(props.results);
  return (
    <div className="p-2">
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Hulu Manu" />
        <meta name="description" property='og:description' content="Pagina Clone de Hulu con NextJS y Tailwindcss" />
        <meta name="description" property='og:image' content="/main.png" />
      </Head>

      {/* Header Component */}
      <Header/>

      {/* Navbar */}
      <Nav></Nav>
      {/* Results */}
      <Results results={props.results}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre; 
  const request = await 
    fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
      .then(res => res.json());

  return{
    props: {
      results: request.results
    }
  }
}