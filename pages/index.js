import Dashboard from "../components/Dashboard";


// export async function getServerSideProps(context) {
//   const res = await fetch('https://rickandmortyapi.com/api/character')
//   const answersResults = await res.json();
//   return {
//     props: { 
//       answersResults
//     },
//   }
// }


export default function HomePage() {

//     const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//       setMounted(true)
//   }, [])

    return (
        <div>
            <Dashboard/>
        </div>
    );


}

export  function handler(req, res) {
    if (req.method === 'POST') {
      const owner=req.body.owner;
      const newOwner={
          id:Date.now,
          text:owner
      }

      owner.push(newOwner);
      res.status(201).json(newOwner)
    }
  }


