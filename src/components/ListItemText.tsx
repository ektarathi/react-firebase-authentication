import * as React from 'react';
export interface ListItemTextProps {}
 
const ListItemTextData: React.SFC<ListItemTextProps> = () => {

  return (
    <ul className="list">
      <li>Single-line text value</li>
      <li>Every pleasure is to be welcomed and every pain avoided</li>
      <li>Our power of choice is untrammelled</li>
    </ul>
  );
}
 
export default ListItemTextData;