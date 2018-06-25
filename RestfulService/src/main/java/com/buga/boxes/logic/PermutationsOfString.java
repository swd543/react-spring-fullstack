package com.buga.boxes.logic;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PermutationsOfString {
	private final String a;
	private long count=0;
	private final Logger logger=LoggerFactory.getLogger(PermutationsOfString.class);
	public PermutationsOfString(String s) {
		a=s;
	}
	
    private String swap(String a, int i, int j)
    {
        char temp;
        char[] charArray = a.toCharArray();
        temp = charArray[i] ;
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return String.valueOf(charArray);
    }
    
	private void recurse(String s, int l, int r) {
		if(l==r) {
			if(count%800000==0) {
				logger.info("Still calculating... "+s);
			}
			count++;
		}
		else {
			for (int i = l; i <= r; i++)
            {
                s = swap(s,l,i);
                recurse(s, l+1, r);
                s = swap(s,l,i);
            }
		}
	}
	
	public long getCount() {
		return count;
	}

	public void generatePermutations() {
		recurse(a, 0, a.length()-1);
	}
}
