package pl.rest.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Map;

/**
 * Build request object based on key and values provided
 */
public class RequestBuilder {
    private static final Logger logger = LoggerFactory.getLogger(RequestBuilder.class);

    /**
     *  Build request object based on provided map of variables (Request body params ) ,
     *  This helps when request object to be created with null value for parameters which are not provided
     * @param requestParametersMap map of object variables to be assigned
     * @param object request object to be updated , would be default request object (with no arguments constructor)
     * @return updated object
     */
    public static Object build(Map<String, String> requestParametersMap, Object object) {

        for (Map.Entry<String, String> entry : requestParametersMap.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            String methodName = "with" + key;
            try {
                Method setNameMethod = object.getClass().getMethod(methodName, String.class);
                setNameMethod.invoke(object, value);
            } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
                e.printStackTrace();
                logger.error(e.getMessage());
            }
        }
        return object;
    }
}
