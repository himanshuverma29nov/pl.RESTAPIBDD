package pl.rest.domain.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class AuthorizeResponseV2 {
    @SerializedName("accessToken")
    @Expose
    private String accessToken;
    @SerializedName("tokenExpiryDate")
    @Expose
    private String tokenExpiryDate;
    @SerializedName("responseCode")
    @Expose
    private Long responseCode;
    @SerializedName("responseMessage")
    @Expose
    private String responseMessage;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenExpiryTime() {
        return tokenExpiryDate;
    }

    public void setTokenExpiryTime(String tokenExpiryTime) {
        this.tokenExpiryDate = tokenExpiryDate;
    }

    public Long getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(Long responseCode) {
        this.responseCode = responseCode;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

}
