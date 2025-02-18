import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
} from "@mui/material";

const DialogBox = ({
    open,
    handleClose,
    title,
    content,
    maxWidth,
    actionButton,
    className
}: any) => {
    return (
        <Dialog
            className={`${className} dialog-box`}
            open={open}
            onClose={handleClose}
            maxWidth={typeof maxWidth === "string" ? false : maxWidth}
            fullWidth={true}
            PaperProps={{
                sx: { maxWidth: maxWidth || "sm" },
            }}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Typography>{content}</Typography>
            </DialogContent>
            {actionButton && <DialogActions>{actionButton}</DialogActions>}
        </Dialog>
    );
};

export default DialogBox;
