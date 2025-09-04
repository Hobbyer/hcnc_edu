package sample.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sample.mapper.ProductMapper;
import sample.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductMapper productMapper;

	@Override
	public List<HashMap<String, Object>> readCategory() {
		// TODO Auto-generated method stub
		
		return productMapper.readCategory();
	}

	@Override
	public List<HashMap<String, Object>> readProduct() {
		// TODO Auto-generated method stub
		return productMapper.readProduct();
	}

	@Override
	public HashMap<String, Object> getProduct(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return productMapper.getProduct(param);
	}

	@Override
	public int saveProduct(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return productMapper.saveProduct(param);
	}

}
