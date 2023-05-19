import { Component, OnInit , Input} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListComponent } from '../list/list.component';
import { ItemComponent } from '../item/item.component';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [HeaderComponent,ListComponent,ItemComponent]
})
export class ContainerComponent implements OnInit {
   searchTerm1:any=null;
  //  filteredList: any;
   searchTerm: string = '';
   filteredList: any[] = [];



  users: any[]=[];

  //  searchTerm: string = '';

  constructor(public userData: UsersDataService){

  }
  ngOnInit(): void {
    this.userData.users().subscribe((data: any) => {
      console.log("data", data)
      this.users = data.data
      console.log("users", this.users); 
      this.searchBar('')

    })
    //move to container
  }
//  @Input() searchTerm: string;


  onGetSearchEvent(event:any){
   this.searchTerm1=event;
   console.log('sdrasvahgsa')
  this.searchBar(this.searchTerm1)

  }
  

   

    searchBar(searchTerm:any) {
      //move to container
      console.log('Filtering data');
      if (searchTerm.trim() === '') {
        this.filteredList = [...this.users]
        console.log("filteredList", this.filteredList);
        return this.filteredList
  
      }
      this.filteredList = this.users.filter((user: any) =>
      (user.vehicle.vtsDeviceId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.branch?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.vehicleLoadType?.bodyType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.driver?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.fleetOwner?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.status?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      console.log("filteredList", this.filteredList);
      return this.filteredList
    }
}
