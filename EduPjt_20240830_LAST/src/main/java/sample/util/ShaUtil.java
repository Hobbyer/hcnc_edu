package sample.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class ShaUtil {
	
	private static final SecureRandom random = new SecureRandom();
	
	public static String getSalt() {
		
		byte[] salt = new byte[16];
		random.nextBytes(salt);
		
		return Base64.getEncoder().encodeToString(salt);
	}
	
	public static String sha256Encode(String plainText, String salt) throws NoSuchAlgorithmException {
		
		MessageDigest digest = MessageDigest.getInstance("SHA-256");
		String combine = plainText + salt;
		byte[] hash = digest.digest(combine.getBytes());
		
		return Base64.getEncoder().encodeToString(hash);
	}

}
