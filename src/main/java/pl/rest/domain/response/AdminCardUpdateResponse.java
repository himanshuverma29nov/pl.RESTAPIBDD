package pl.rest.domain.response;

import java.util.List;
import javax.annotation.Generated;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class AdminCardUpdateResponse {

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

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
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
