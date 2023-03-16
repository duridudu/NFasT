package com.nft.nfast.controller.business;

import com.nft.nfast.model.dto.business.NfastMintDto;
import com.nft.nfast.model.dto.business.IncomeFindDto;
import com.nft.nfast.model.dto.business.NfastMintedDto;
import com.nft.nfast.model.service.store.StoreMainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Slf4j
@RestController
@RequestMapping("/api/store")
@CrossOrigin(origins = "*")
public class StoreMainRestController {
    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";


    @Autowired
    StoreMainService storeMainService;

    // 가게 NFast 발행
    @PostMapping("/{store_sequence}/mint")
    public ResponseEntity<String> mintNfast(@RequestBody NfastMintDto mintDto, @PathVariable Long store_sequence){
        storeMainService.saveNfast(mintDto);
        String result=SUCCESS;
        return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
    }

    // 전체 수입 내역 출력
    @GetMapping("{store_sequence}/incomes")
    public ResponseEntity<Map<String, Object>> incomeList(@PathVariable Long store_sequence){
        Map<String, Object> resultMap = new HashMap<>();
        List<IncomeFindDto> incomeGetDtoList=storeMainService.findAllIncomes(store_sequence);

        resultMap.put("result", SUCCESS);
        resultMap.put("incomes", incomeGetDtoList);
        return new ResponseEntity<>(resultMap,HttpStatus.ACCEPTED);
    }

    // 월별 발행 수익 출력
    @GetMapping("{store_sequence}/monthly-mint-income")
    public ResponseEntity<Map<String, Object>> mintIncome(@PathVariable Long store_sequence){
        Map<String, Object> resultMap = new HashMap<>();
        BigDecimal mintIncome = storeMainService.findMintIncome(store_sequence);

        resultMap.put("result", SUCCESS);
        resultMap.put("monthlyMintIncome", mintIncome);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    // 월별 리셀 수익 출력
    @GetMapping("{store_sequence}/monthly-resell-income")
    public ResponseEntity<Map<String, Object>> resellIncome(@PathVariable Long store_sequence){
        Map<String, Object> resultMap = new HashMap<>();
        BigDecimal resellIncome = storeMainService.findResellIncome(store_sequence);

        resultMap.put("result", SUCCESS);
        resultMap.put("monthlyResellIncome", resellIncome);
        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }

    // 발행한 NFasT 목록
    @GetMapping("{store_sequence}/nfts")
    public ResponseEntity<Map<String, Object>> mintedNfast(@PathVariable Long store_sequence){
        Map<String, Object> resultMap=new HashMap<>();
        List<NfastMintedDto> mintedNfastList=storeMainService.findMintedNfast(store_sequence);
        resultMap.put("result",SUCCESS);
        resultMap.put("mintedNfastList", mintedNfastList);

        return new ResponseEntity<>(resultMap, HttpStatus.ACCEPTED);
    }
}