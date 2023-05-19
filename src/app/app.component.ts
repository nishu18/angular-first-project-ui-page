import { Component, OnInit } from '@angular/core';
import {UsersDataService} from './services/users-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-project';
  searchTerm: string = '';
  filteredList:any;

  users:any;
constructor(public userData:UsersDataService){
  

}

ngOnInit(): void {
  this.userData.users().subscribe((data:any)=>{
    console.log("data", data)
    this.users=data.data})
    //move to container
}

// search(e:any){
//   console.log(e)
// }
 searchBar() {
  //move to container
  if (this.searchTerm.trim() === '') {
    this.filteredList= [...this.users]
    return this.filteredList
  }
  this.filteredList=this.users.filter((user: any) =>
    (user.vehicle.vtsDeviceId?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.branch?.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.vehicleLoadType?.bodyType?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.driver?.name?.toLowerCase().includes(this.searchTerm.toLowerCase())||
      user.fleetOwner?.name?.toLowerCase().includes(this.searchTerm.toLowerCase())||
      user.status?.toLowerCase().includes(this.searchTerm.toLowerCase()))
  );
  return this.filteredList
}


}

