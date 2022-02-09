package pl.rest.domain.response;

import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("jsonschema2pojo")
public class AdminCardStatusUpdateResponse {

    @SerializedName("cardStatusUpdateResponseList")
    @Expose
    private List<CardStatusUpdateResponse> cardStatusUpdateResponseList = null;
    @SerializedName("remarks")
    @Expose
    private String remarks;
    @SerializedName("responseCode")
    @Expose
    private Long responseCode;
    @SerializedName("responseMessage")
    @Expose
    private String responseMessage;

    public List<CardStatusUpdateResponse> getCardStatusUpdateResponseList() {
        return cardStatusUpdateResponseList;
    }

    public void setCardStatusUpdateResponseList(List<CardStatusUpdateResponse> cardStatusUpdateResponseList) {
        this.cardStatusUpdateResponseList = cardStatusUpdateResponseList;
    }

    public AdminCardStatusUpdateResponse withCardStatusUpdateResponseList(List<CardStatusUpdateResponse> cardStatusUpdateResponseList) {
        this.cardStatusUpdateResponseList = cardStatusUpdateResponseList;
        return this;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public AdminCardStatusUpdateResponse withRemarks(String remarks) {
        this.remarks = remarks;
        return this;
    }

    public Long getResponseCode() {
        return responseCode;
    }

    public void setResponseCode(Long responseCode) {
        this.responseCode = responseCode;
    }

    public AdminCardStatusUpdateResponse withResponseCode(Long responseCode) {
        this.responseCode = responseCode;
        return this;
    }

    public String getResponseMessage() {
        return responseMessage;
    }

    public void setResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
    }

    public AdminCardStatusUpdateResponse withResponseMessage(String responseMessage) {
        this.responseMessage = responseMessage;
        return this;
    }

}