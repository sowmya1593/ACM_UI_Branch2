import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-system-view-component',
  templateUrl: './system-view-component.component.html',
  styleUrls: ['./system-view-component.component.css']
})
export class SystemViewComponentComponent implements OnInit {

  public counties = [ 
  {
  "county_seat" : "Accomac",
  "county_code" : "1",
  "year_founded" : "1663",
  "county_name" : "Accomack"
}
, {
  "county_seat" : "Charlottesville",
  "county_code" : "3",
  "year_founded" : "1744",
  "county_name" : "Albemarle"
}
, {
  "county_seat" : "Covington   ",
  "county_code" : "5",
  "year_founded" : "1822",
  "county_name" : "Alleghany"
}
, {
  "county_seat" : "Amelia Court House  ",
  "county_code" : "7",
  "year_founded" : "1734",
  "county_name" : "Amelia"
}
, {
  "county_seat" : "Amherst   ",
  "county_code" : "9",
  "year_founded" : "1761",
  "county_name" : "Amherst"
}
, {
  "county_seat" : "Appomattox   ",
  "county_code" : "11",
  "year_founded" : "1845",
  "county_name" : "Appomattox"
}
, {
  "county_seat" : "Arlington   ",
  "county_code" : "13",
  "year_founded" : "1801",
  "county_name" : "Arlington"
}
, {
  "county_seat" : "Staunton   ",
  "county_code" : "15",
  "year_founded" : "1745",
  "county_name" : "Augusta"
}
, {
  "county_seat" : "Warm Springs   ",
  "county_code" : "17",
  "year_founded" : "1790",
  "county_name" : "Bath"
}
, {
  "county_seat" : "Bedford   ",
  "county_code" : "19",
  "year_founded" : "1753",
  "county_name" : "Bedford"
}
, {
  "county_seat" : "Bland   ",
  "county_code" : "21",
  "year_founded" : "1861",
  "county_name" : "Bland"
}
, {
  "county_seat" : "Fincastle   ",
  "county_code" : "23",
  "year_founded" : "1796",
  "county_name" : "Botetourt"
}
, {
  "county_seat" : "Lawrenceville   ",
  "county_code" : "25",
  "year_founded" : "1732",
  "county_name" : "Brunswick"
}
, {
  "county_seat" : "Grundy   ",
  "county_code" : "27",
  "year_founded" : "1858",
  "county_name" : "Buchanan"
}
, {
  "county_seat" : "Buckingham   ",
  "county_code" : "29",
  "year_founded" : "1785",
  "county_name" : "Buckingham"
}
, {
  "county_seat" : "Rustburg   ",
  "county_code" : "31",
  "year_founded" : "1782",
  "county_name" : "Campbell"
}
, {
  "county_seat" : "Bowling Green   ",
  "county_code" : "33",
  "year_founded" : "1728",
  "county_name" : "Caroline"
}
, {
  "county_seat" : "Hillsville   ",
  "county_code" : "35",
  "year_founded" : "1842",
  "county_name" : "Carroll"
}
, {
  "county_seat" : "Charles City   ",
  "county_code" : "36",
  "year_founded" : "1634",
  "county_name" : "Charles City"
}
, {
  "county_seat" : "Charlotte Court House  ",
  "county_code" : "37",
  "year_founded" : "1765",
  "county_name" : "Charlotte"
}
, {
  "county_seat" : "Chesterfield   ",
  "county_code" : "41",
  "year_founded" : "1749",
  "county_name" : "Chesterfield"
}
, {
  "county_seat" : "Berryville   ",
  "county_code" : "43",
  "year_founded" : "1836",
  "county_name" : "Clarke"
}
, {
  "county_seat" : "New Castle   ",
  "county_code" : "45",
  "year_founded" : "1851",
  "county_name" : "Craig"
}
, {
  "county_seat" : "Culpeper   ",
  "county_code" : "47",
  "year_founded" : "1748",
  "county_name" : "Culpeper"
}
, {
  "county_seat" : "Cumberland   ",
  "county_code" : "49",
  "year_founded" : "1749",
  "county_name" : "Cumberland"
}
, {
  "county_seat" : "Clintwood   ",
  "county_code" : "51",
  "year_founded" : "1880",
  "county_name" : "Dickenson"
}
, {
  "county_seat" : "Dinwiddie   ",
  "county_code" : "53",
  "year_founded" : "1752",
  "county_name" : "Dinwiddie"
}
, {
  "county_seat" : "Tappahannock   ",
  "county_code" : "57",
  "year_founded" : "1692",
  "county_name" : "Essex"
}
, {
  "county_seat" : "Fairfax   ",
  "county_code" : "59",
  "year_founded" : "1742",
  "county_name" : "Fairfax"
}
, {
  "county_seat" : "Warrenton   ",
  "county_code" : "61",
  "year_founded" : "1759",
  "county_name" : "Fauquier"
}
, {
  "county_seat" : "Floyd   ",
  "county_code" : "63",
  "year_founded" : "1831",
  "county_name" : "Floyd"
}
, {
  "county_seat" : "Palmyra   ",
  "county_code" : "65",
  "year_founded" : "1777",
  "county_name" : "Fluvanna"
}
, {
  "county_seat" : "Rocky Mount   ",
  "county_code" : "67",
  "year_founded" : "1785",
  "county_name" : "Franklin"
}
, {
  "county_seat" : "Winchester   ",
  "county_code" : "69",
  "year_founded" : "1743",
  "county_name" : "Frederick"
}
, {
  "county_seat" : "Pearisburg   ",
  "county_code" : "71",
  "year_founded" : "1806",
  "county_name" : "Giles"
}
, {
  "county_seat" : "Gloucester   ",
  "county_code" : "73",
  "year_founded" : "1651",
  "county_name" : "Gloucester"
}
, {
  "county_seat" : "Goochland   ",
  "county_code" : "75",
  "year_founded" : "1727",
  "county_name" : "Goochland"
}
, {
  "county_seat" : "Independence   ",
  "county_code" : "77",
  "year_founded" : "1793",
  "county_name" : "Grayson"
}
, {
  "county_seat" : "Stanardsville   ",
  "county_code" : "79",
  "year_founded" : "1838",
  "county_name" : "Greene"
}
, {
  "county_seat" : "Emporia   ",
  "county_code" : "81",
  "year_founded" : "1780",
  "county_name" : "Greensville"
}
, {
  "county_seat" : "Halifax   ",
  "county_code" : "83",
  "year_founded" : "1752",
  "county_name" : "Halifax"
}
, {
  "county_seat" : "Hanover   ",
  "county_code" : "85",
  "year_founded" : "1720",
  "county_name" : "Hanover"
}
, {
  "county_seat" : "Richmond   ",
  "county_code" : "87",
  "year_founded" : "1634",
  "county_name" : "Henrico"
}
, {
  "county_seat" : "Martinsville  ",
  "county_code" : "89",
  "year_founded" : "1777",
  "county_name" : "Henry"
}
, {
  "county_seat" : "Monterey   ",
  "county_code" : "91",
  "year_founded" : "1847",
  "county_name" : "Highland"
}
, {
  "county_seat" : "Isle Of Wight   ",
  "county_code" : "93",
  "year_founded" : "1634",
  "county_name" : "Isle of Wight"
}
, {
  "county_seat" : "Williamsburg   ",
  "county_code" : "95",
  "year_founded" : "1634",
  "county_name" : "James City"
}
, {
  "county_seat" : "King And Queen Court House  ",
  "county_code" : "97",
  "year_founded" : "1691",
  "county_name" : "King and Queen"
}
, {
  "county_seat" : "King George   ",
  "county_code" : "99",
  "year_founded" : "1721",
  "county_name" : "King George"
}
, {
  "county_seat" : "King William   ",
  "county_code" : "101",
  "year_founded" : "1702",
  "county_name" : "King William"
}
, {
  "county_seat" : "Lancaster   ",
  "county_code" : "103",
  "year_founded" : "1651",
  "county_name" : "Lancaster"
}
, {
  "county_seat" : "Jonesville   ",
  "county_code" : "105",
  "year_founded" : "1793",
  "county_name" : "Lee"
}
, {
  "county_seat" : "Leesburg   ",
  "county_code" : "107",
  "year_founded" : "1757",
  "county_name" : "Loudoun"
}
, {
  "county_seat" : "Louisa   ",
  "county_code" : "109",
  "year_founded" : "1742",
  "county_name" : "Louisa"
}
, {
  "county_seat" : "Lunenburg   ",
  "county_code" : "111",
  "year_founded" : "1746",
  "county_name" : "Lunenburg"
}
, {
  "county_seat" : "Madison   ",
  "county_code" : "113",
  "year_founded" : "1793",
  "county_name" : "Madison"
}
, {
  "county_seat" : "Mathews   ",
  "county_code" : "115",
  "year_founded" : "1791",
  "county_name" : "Mathews"
}
, {
  "county_seat" : "Boydton   ",
  "county_code" : "117",
  "year_founded" : "1765",
  "county_name" : "Mecklenburg"
}
, {
  "county_seat" : "Saluda   ",
  "county_code" : "119",
  "year_founded" : "1673",
  "county_name" : "Middlesex"
}
, {
  "county_seat" : "Christiansburg   ",
  "county_code" : "121",
  "year_founded" : "1777",
  "county_name" : "Montgomery"
}
, {
  "county_seat" : "Lovingston   ",
  "county_code" : "125",
  "year_founded" : "1808",
  "county_name" : "Nelson"
}
, {
  "county_seat" : "New Kent   ",
  "county_code" : "127",
  "year_founded" : "1654",
  "county_name" : "New Kent"
}
, {
  "county_seat" : "Eastville   ",
  "county_code" : "131",
  "year_founded" : "1634",
  "county_name" : "Northampton"
}
, {
  "county_seat" : "Heathsville   ",
  "county_code" : "133",
  "year_founded" : "1648",
  "county_name" : "Northumberland"
}
, {
  "county_seat" : "Nottoway   ",
  "county_code" : "135",
  "year_founded" : "1789",
  "county_name" : "Nottoway"
}
, {
  "county_seat" : "Orange   ",
  "county_code" : "137",
  "year_founded" : "1734",
  "county_name" : "Orange"
}
, {
  "county_seat" : "Luray   ",
  "county_code" : "139",
  "year_founded" : "1831",
  "county_name" : "Page"
}
, {
  "county_seat" : "Stuart   ",
  "county_code" : "141",
  "year_founded" : "1791",
  "county_name" : "Patrick"
}
, {
  "county_seat" : "Chatham   ",
  "county_code" : "143",
  "year_founded" : "1767",
  "county_name" : "Pittsylvania"
}
, {
  "county_seat" : "Powhatan   ",
  "county_code" : "145",
  "year_founded" : "1777",
  "county_name" : "Powhatan"
}
, {
  "county_seat" : "Farmville   ",
  "county_code" : "147",
  "year_founded" : "1754",
  "county_name" : "Prince Edward"
}
, {
  "county_seat" : "Prince George   ",
  "county_code" : "149",
  "year_founded" : "1703",
  "county_name" : "Prince George"
}
, {
  "county_seat" : "Manassas   ",
  "county_code" : "153",
  "year_founded" : "1731",
  "county_name" : "Prince William"
}
, {
  "county_seat" : "Pulaski   ",
  "county_code" : "155",
  "year_founded" : "1839",
  "county_name" : "Pulaski"
}
, {
  "county_seat" : "Washington  ",
  "county_code" : "157",
  "year_founded" : "1833",
  "county_name" : "Rappahannock"
}
, {
  "county_seat" : "Warsaw   ",
  "county_code" : "159",
  "year_founded" : "1692",
  "county_name" : "Richmond"
}
, {
  "county_seat" : "Roanoke   ",
  "county_code" : "161",
  "year_founded" : "1838",
  "county_name" : "Roanoke"
}
, {
  "county_seat" : "Lexington  ",
  "county_code" : "163",
  "year_founded" : "1778",
  "county_name" : "Rockbridge"
}
, {
  "county_seat" : "Harrisonburg   ",
  "county_code" : "165",
  "year_founded" : "1778",
  "county_name" : "Rockingham"
}
, {
  "county_seat" : "Lebanon   ",
  "county_code" : "167",
  "year_founded" : "1786",
  "county_name" : "Russell"
}
, {
  "county_seat" : "Gate City   ",
  "county_code" : "169",
  "year_founded" : "1814",
  "county_name" : "Scott"
}
, {
  "county_seat" : "Woodstock   ",
  "county_code" : "171",
  "year_founded" : "1772",
  "county_name" : "Shenandoah"
}
, {
  "county_seat" : "Marion   ",
  "county_code" : "173",
  "year_founded" : "1832",
  "county_name" : "Smyth"
}
, {
  "county_seat" : "Courtland   ",
  "county_code" : "175",
  "year_founded" : "1749",
  "county_name" : "Southampton"
}
, {
  "county_seat" : "Spotsylvania   ",
  "county_code" : "177",
  "year_founded" : "1721",
  "county_name" : "Spotsylvania"
}
, {
  "county_seat" : "Stafford   ",
  "county_code" : "179",
  "year_founded" : "1664",
  "county_name" : "Stafford"
}
, {
  "county_seat" : "Surry   ",
  "county_code" : "181",
  "year_founded" : "1652",
  "county_name" : "Surry"
}
, {
  "county_seat" : "Sussex   ",
  "county_code" : "183",
  "year_founded" : "1754",
  "county_name" : "Sussex"
}
, {
  "county_seat" : "Tazewell   ",
  "county_code" : "185",
  "year_founded" : "1800",
  "county_name" : "Tazewell"
}
, {
  "county_seat" : "Front Royal   ",
  "county_code" : "187",
  "year_founded" : "1836",
  "county_name" : "Warren"
}
, {
  "county_seat" : "Abingdon   ",
  "county_code" : "191",
  "year_founded" : "1777",
  "county_name" : "Washington"
}
, {
  "county_seat" : "Montross   ",
  "county_code" : "193",
  "year_founded" : "1653",
  "county_name" : "Westmoreland"
}
, {
  "county_seat" : "Wise   ",
  "county_code" : "195",
  "year_founded" : "1856",
  "county_name" : "Wise"
}
, {
  "county_seat" : "Wytheville   ",
  "county_code" : "197",
  "year_founded" : "1790",
  "county_name" : "Wythe"
}
, {
  "county_seat" : "Yorktown   ",
  "county_code" : "199",
  "year_founded" : "1634",
  "county_name" : "York"
}
 ];
  public showForm:string;
  private titus: string;

  constructor( private router: Router) {

  }

  ngOnInit() {
  }
  
  selectLocal(locality){
   
     this.router.navigate(['/system/tab/info/' + locality,{test:'view'}]);
}



}
