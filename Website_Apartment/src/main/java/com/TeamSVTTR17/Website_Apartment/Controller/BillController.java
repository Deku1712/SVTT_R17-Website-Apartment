package com.TeamSVTTR17.Website_Apartment.Controller;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.TeamSVTTR17.Website_Apartment.Entity.Apartment;
import com.TeamSVTTR17.Website_Apartment.Entity.Bill;
import com.TeamSVTTR17.Website_Apartment.Entity.Fee;
import com.TeamSVTTR17.Website_Apartment.Entity.Room;
import com.TeamSVTTR17.Website_Apartment.Service.ApartmentService;
import com.TeamSVTTR17.Website_Apartment.Service.BillService;
import com.TeamSVTTR17.Website_Apartment.Service.FeeService;
import com.TeamSVTTR17.Website_Apartment.Service.RoomService;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api-apartment")
public class BillController {
	@Autowired
	private BillService billService;
	@Autowired
	private FeeService feeService;
	@Autowired
	private ApartmentService apartmentService;
	@Autowired
	private RoomService roomService;
	
	
	@GetMapping("/hello")
	public String hello() {
		return "test";
	}

	
	@GetMapping("/bills")
	public List<Bill> getAllBill() {
		return billService.findAll();
	}
	
	@GetMapping("/bills/{id}")
	public Bill getBillById(@PathVariable(value = "id") Long billId) {
        return billService.findById(billId).orElse(null);
    }
	
	
	@PostMapping("/bills")
	public Bill createBill( @RequestBody Bill bill) {
		return billService.save(bill);
	}
	
	@DeleteMapping("/bills/{id}")
	public boolean deleteBill(@PathVariable(value = "id") Long billId) {
        if (billService.existsById(billId)) {
        	billService.deleteById(billId);
            return true;
        } else {
            return false;
        }
    }
	
	// search bill by room name
	@GetMapping("/searchBillsByRoomName/{name}")
	public List<Bill> getBillByRoomName(@PathVariable(value = "name") String room_name) {
		List<Bill> listBill= billService.findAll();
		List<Bill> listBillByRoomName = new ArrayList<>();
		for (Bill bill : listBill) {
			Room r = bill.getRoom();
			System.out.println("List:"  + r.toString());
			if(r.getRoom_name().contains(room_name)) {
				listBillByRoomName.add(bill);
			}
		}
		System.out.println("Bills Room name: " + listBillByRoomName.toString());
		return listBillByRoomName;
    }
	
	// search bill by Date
	@GetMapping("/searchBillsByDate/{date}")
	public List<Bill> getBillByDate(@PathVariable(value = "date") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate sDate) {
	    List<Bill> listBill = billService.findAll();
	    List<Bill> listBillByRoomName = new ArrayList<>();

	    for (Bill bill : listBill) {
	        LocalDate createDate = bill.getCreateDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
	        if (createDate.equals(sDate)) {
	            listBillByRoomName.add(bill);
	        }
	    }

	    System.out.println("Bills date: " + listBillByRoomName.toString());
	    return listBillByRoomName;
	}

	
//	@GetMapping("/fee/{id}")
//	public Fee getAllFeeByIdApartment(@PathVariable(value = "id") Long feeId) {
//		List<Fee> listFee= feeService.findAll();
//		System.out.println("check fee:" + listFee.toString());
//		for (Fee fee : listFee) {
//			if(fee.getApartmentId(fee.getApartment()) == feeId) {
//				return fee;
//			}
//		}
//		return null;
//	}
//	
//	@GetMapping("/apartments")
//	public List<Apartment> getAllApartment() {
//		return apartmentService.findAll();
//	}
	

}
