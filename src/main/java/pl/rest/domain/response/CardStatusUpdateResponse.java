package pl.rest.domain.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class CardStatusUpdateResponse {

    @SerializedName("referenceNumber")
    @Expose
    private Long referenceNumber;
    @SerializedName("responseCode")
    @Expose
    private Long responseCode;
    @SerializedName("responseMessage")
    @Expose
    private String responseMessage;

    public Long getReferenceNumber() {
        return referenceNumber;
    }

    public void setReferenceNumber(Long referenceNumber) {
        this.referenceNumber = referenceNumber;
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