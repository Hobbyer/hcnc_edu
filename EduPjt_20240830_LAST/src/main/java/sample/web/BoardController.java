package sample.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.DataSet;

import sample.service.BoardService;

@Controller
public class BoardController {
	
	@Autowired
	private BoardService boardService;

	
	@RequestMapping(value="/readBoardList.do")
	public NexacroResult readBoardList() {
		
		NexacroResult result = new NexacroResult();
		
		
		List<HashMap<String, Object>> resultData = boardService.readBoardList();
		
		if(resultData != null) {
			result.addDataSet("ds_list", resultData);
		}
		
		return result;
	}
	
	@RequestMapping(value="/searchBoardList.do")
	public NexacroResult searchBoardList(@ParamDataSet(name="ds_search", required = false) Map<String, Object> param) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		
		List<HashMap<String, Object>> resultData = boardService.searchBoardList(param);
		
		result.addDataSet("ds_list", resultData);
		
		return result;
		
	}
	
	@RequestMapping(value="/getBoard.do")
	public NexacroResult getBoard(@ParamDataSet(name="ds_search", required = false) Map<String, Object> param) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		
		HashMap<String, Object> resultData = boardService.getBoard(param);
		
		result.addDataSet("ds_board", resultData);
		
		return result;
		
	}
	
	@RequestMapping(value="/createBoard.do")
	public NexacroResult createBoard(@ParamDataSet(name="new_board", required = false) Map<String, Object> param) {
		
		NexacroResult result = new NexacroResult();
		
		System.out.println(param);
		HashMap<String, Object> resultData = new HashMap<String, Object>();
		try {
			int createResult = boardService.createBoard(param);
		
			if(createResult == 1) {
				
				resultData.put("message", "게시물 등록 완료!");
			} else {
				
				resultData.put("message", "게시물 등록 실패했습니다.");
			}		
			
			 resultData.put("result_value", createResult);

		} catch(Exception e) {
			result.setErrorCode(-1);
			result.setErrorMsg("catch 오류>>>>");
			resultData.put("message", "오류발생! 예외처리 코드임");
		}
		
		 result.addDataSet("ds_response", resultData);
		
		return result;
	}
	
	@RequestMapping(value="/updateBoard.do")
	public NexacroResult updateBoard(@ParamDataSet(name="ds_board", required = false) Map<String, Object> param) {
		
		NexacroResult nxResult = new NexacroResult();
		
		System.out.println(param);
		
		HashMap<String, Object> resultData = new HashMap<String, Object>();
		
		try {
			int updateResult = boardService.updateBoard(param);
			
			if(updateResult == 1) {
				resultData.put("message", "게시글이 수정되었습니다.");
			} else {
				resultData.put("message", "수정 실패!");
			}
			
			resultData.put("result_value", updateResult);
		} catch(Exception e) {
			resultData.put("message", "쿼리 실행 중 오류 발생했습니다.");
			
			nxResult.setErrorCode(-1);
			nxResult.setErrorMsg("오류발생!");
		}
		
		nxResult.addDataSet("ds_response", resultData);
		
		return nxResult;
	}
	
	@RequestMapping(value="/boardCU.do")
	public NexacroResult boardCU(@ParamDataSet(name="ds_list", required = false) List<Map<String, Object>> param) {
		
		for(int i=0; i < param.size(); i++) {
			
			System.out.println(param.get(i));
			
			if("3".equals(param.get(i).get("DataSetRowType").toString())){
				boardService.deleteBoard(param.get(i));
			} else if("2".equals(param.get(i).get("DataSetRowType").toString())){
				boardService.createBoard(param.get(i));
			} else {
				boardService.updateBoard(param.get(i));
			}
		}
		
		return null;
	} 
}
