import Dashboard from "../components/Dashboard";



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


