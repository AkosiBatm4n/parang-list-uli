import {data} from './data'
console.log(data);

const filter = data.filter((data)=> data.street === "Kulas light");

console.log(filter);

const Header = () => {
  return (<div>
    {data.map((data, key)=>(
        <div>
     <ol key={key.data}>
        <li  key={key}> {data.name}</li>
        <li  key={key}> {data.username}</li>
        <li  key={key}> {data.email}</li>
        <li  key={key}> {data.phone}</li>
        </ol>
        </div>



))}
</div>
)
}

export default Header