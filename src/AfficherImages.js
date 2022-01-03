import { people } from './data.js';


export default function AfficherImages() {

  const listItems = people.map(person =>
    <div key={person.id}>
      <img
        src={person.imageId}
        alt={person.name}
        height={100}
        
      />
    </div>
  );
  return <ul>{listItems}</ul>;
  
}
