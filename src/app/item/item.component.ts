import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
// import { UsersDataService } from '../services/users-data.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // filteredList: any;
  // searchTerm: string = '';

  @Input() data: any;

  // users: any;
  // @Output() onList=new EventEmitter<string>()

  constructor(public userData: UsersDataService) {


  }
  ngOnInit(): void {
    console.log("data", this.data);
    //move to container
  }
  // butt(){
  //   console.log(this.filteredList)
  // }
  
//  onLIst(){
//   this.onList.emit(this.filteredList)
// }
//   onSearch(searchTerm: string) {
//     if (searchTerm.trim() === '') {
//       this.filteredList = [...this.users];
//     } else {
//       this.filteredList = this.users.filter((user: any) =>
//         (user.vehicle.vtsDeviceId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           user.branch?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           user.vehicleLoadType?.bodyType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           user.driver?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           user.fleetOwner?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           user.status?.toLowerCase().includes(searchTerm.toLowerCase()))
//       );
//     }
//   }
  


// }



}

