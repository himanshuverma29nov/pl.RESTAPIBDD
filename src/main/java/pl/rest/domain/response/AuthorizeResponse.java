package pl.rest.domain.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class AuthorizeResponse {

    @SerializedName("accessToken")
    @Expose
    private String accessToken;
    @SerializedName("tokenExpiryTime")
    @Expose
    private String tokenExpiryTime;
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
      return tokenExpiryTime;
    }

    public void setTokenExpiryTime(String tokenExpiryTime) {
      this.tokenExpiryTime = tokenExpiryTime;
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