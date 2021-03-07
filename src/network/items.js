import {request} from "./request";

export function getitemsData(iid){
	return request ({
		url:'/detail',
		params:{
			iid
		}
	})
}


export class goods{
	 constructor(itemInfo,columns,services){
	 	this.title = itemInfo.title
	 	this.desc = itemInfo.desc
	 	this.newprice = itemInfo.price
	 	this.oldprice = itemInfo.oldPrice
	 	this.discount = itemInfo.discountDesc
	 	this.columns = columns
	 	this.services = services
	 	this.realprice = itemInfo.lowNowPrice
	 }
}
