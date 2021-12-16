package pl.rest.domain.response;

import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("jsonschema2pojo")
public class CardIssueResponse {

    @SerializedName("externalRequestId")
    @Expose
    private String externalRequestId;
    @SerializedName("orderId")
    @Expose
    private Long orderId;
    @SerializedName("orderStatus")
    @Expose
    private Long orderStatus;
    @SerializedName("cardDetailResponseList")
    @Expose
    private List<CardDetailResponse> cardDetailResponseList = null;
    @SerializedName("successCount")
    @Expose
    private Long successCount;
    @SerializedName("failedCount")
    @Expose
    private Long failedCount;
    @SerializedName("orderAmount")
    @Expose
    private Long orderAmount;
    @SerializedName("issuanceCharge")
    @Expose
    private Long issuanceCharge;
    @SerializedName("netOrderAmount")
    @Expose
    private Long netOrderAmount;
    @SerializedName("responseCode")
    @Expose
    private Long responseCode;
    @SerializedName("responseMessage")
    @Expose
    private String responseMessage;

    public String getExternalRequestId() {
        return externalRequestId;
    }

    public void setExternalRequestId(String externalRequestId) {
        this.externalRequestId = externalRequestId;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(Long orderStatus) {
        this.orderStatus = orderStatus;
    }

    public List<CardDetailResponse> getCardDetailResponseList() {
        return cardDetailResponseList;
    }

    public void setCardDetailResponseList(List<CardDetailResponse> cardDetailResponseList) {
        this.cardDetailResponseList = cardDetailResponseList;
    }

    public Long getSuccessCount() {
        return successCount;
    }

    public void setSuccessCount(Long successCount) {
        this.successCount = successCount;
    }

    public Long getFailedCount() {
        return failedCount;
    }

    public void setFailedCount(Long failedCount) {
        this.failedCount = failedCount;
    }

    public Long getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(Long orderAmount) {
        this.orderAmount = orderAmount;
    }

    public Long getIssuanceCharge() {
        return issuanceCharge;
    }

    public void setIssuanceCharge(Long issuanceCharge) {
        this.issuanceCharge = issuanceCharge;
    }

    public Long getNetOrderAmount() {
        return netOrderAmount;
    }

    public void setNetOrderAmount(Long netOrderAmount) {
        this.netOrderAmount = netOrderAmount;
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