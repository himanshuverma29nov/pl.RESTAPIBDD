package pl.rest.domain.response;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("jsonschema2pojo")
public class AdminCardStatusUpdateResponseList {

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

    public AdminCardStatusUpdateResponseList withReferenceNumber(Long referenceNumber) {
        this.referenceNumber = referenceNumber;
        return this;
    }

    public Long getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(Long responseCode) {
        this.responseCode = responseCode;
    }

    public AdminCardStatusUpdateResponseList withResponseCode(Long responseCode) {
        this.responseCode = responseCode;
        return this;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

    public AdminCardStatusUpdateResponseList withResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }

}