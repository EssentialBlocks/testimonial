/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { MediaUpload, RichText } = wp.blockEditor;
const { Button } = wp.components;

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import {
	DEFAULT_BACKGROUND,
	DEFAULT_SHADOW_COLOR,
	DEFAULT_NAME_SIZE,
	DEFAULT_NAME_COLOR,
	DEFAULT_COMPANY_SIZE,
	DEFAULT_DESCRIPTION_SIZE,
	DEFAULT_DESCRIPTION_COLOR,
	DEFAULT_QUOTE_SIZE,
	DEFAULT_QUOTE_COLOR,
	DEFAULT_COMPANY_COLOR,
} from "./constants";

const Edit = (props) => {
	const { isSelected, attributes, setAttributes } = props;
	const {
		fontSize,
		displayAvatar,
		avatarInline,
		avatarPosition,
		avatarAlign,
		borderRadius,
		avatarOrder,
		imageId,
		imageUrl,
		userName,
		companyName,
		description,
		userInfoAlign,
		textAlign,
		userInfoPos,
		imagePosition,
		userNameColor,
		descriptionColor,
		quoteColor,
		quoteSize,
		backgroundType,
		backgroundColor,
		backgroundImageURL,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowSpread,
		shadowBlur,
		marginUnit,
		paddingUnit,
		quoteSizeUnit,
		companyColor,
		nameFontFamily,
		nameFontSize,
		nameSizeUnit,
		nameFontWeight,
		nameTextTransform,
		nameTextDecoration,
		nameLetterSpacing,
		nameLetterSpacingUnit,
		nameLineHeight,
		nameLineHeightUnit,
		companyFontFamily,
		companyFontSize,
		companySizeUnit,
		companyFontWeight,
		companyTextTransform,
		companyTextDecoration,
		companyLetterSpacing,
		companyLetterSpacingUnit,
		companyLineHeight,
		companyLineHeightUnit,
		descriptionFontFamily,
		descriptionFontSize,
		descriptionSizeUnit,
		descriptionFontWeight,
		descriptionTextTransform,
		descriptionTextDecoration,
		descriptionLetterSpacing,
		descriptionLetterSpacingUnit,
		descriptionLineHeight,
		descriptionLineHeightUnit,
		bgPosition,
		bgXPos,
		bgXPosUnit,
		bgYPos,
		bgYPosUnit,
		bgSize,
		bgWidth,
		bgWidthUnit,
		bgRepeat,
		bgAttachment,
	} = attributes;

	const containerStyle = {
		backgroundImage:
			backgroundType === "image" && backgroundImageURL
				? `url('${backgroundImageURL}')`
				: "none",
		backgroundColor: backgroundColor || DEFAULT_BACKGROUND,
		backgroundPosition:
			bgPosition === "custom"
				? `${bgXPos}${bgXPosUnit} ${bgYPos}${bgYPosUnit}`
				: bgPosition,
		backgroundSize: bgSize === "custom" ? bgWidth + bgWidthUnit : bgSize,
		backgroundRepeat: bgRepeat || "none",
		backgroundAttachment: bgAttachment,
		margin: `${marginTop || 0}${marginUnit} ${marginRight || 0}${marginUnit} ${
			marginBottom || 0
		}${marginUnit} ${marginLeft || 0}${marginUnit}`,
		padding: `${paddingTop || 10}${paddingUnit} ${
			paddingRight || 10
		}${paddingUnit} ${paddingBottom || 10}${paddingUnit} ${
			paddingLeft || 10
		}${paddingUnit}`,
		boxShadow: `${shadowHOffset || 0}px ${shadowVOffset || 0}px ${
			shadowBlur || 0
		}px ${shadowSpread || 0}px ${shadowColor || DEFAULT_SHADOW_COLOR}`,
	};

	const avatarContainerStyle = {
		order: avatarOrder,
		justifyContent: avatarPosition,
		alignItems: avatarAlign,
		fontSize: `${fontSize}px`,
		flexDirection: avatarInline ? "row" : "column",
	};

	const imageContainerStyle = {
		order: imagePosition,
	};

	const userInfoStyle = {
		textAlign: textAlign,
		justifyContent: userInfoPos,
		alignSelf: userInfoAlign,
	};

	const userNameStyle = {
		fontSize: `${nameFontSize || DEFAULT_NAME_SIZE}${nameSizeUnit}`,
		fontFamily: nameFontFamily,
		fontWeight: nameFontWeight,
		textTransform: nameTextTransform,
		textDecoration: nameTextDecoration,
		letterSpacing: nameLetterSpacing
			? `${nameLetterSpacing}${nameLetterSpacingUnit}`
			: undefined,
		lineHeight: nameLineHeight
			? `${nameLineHeight}${nameLineHeightUnit}`
			: undefined,
		color: userNameColor || DEFAULT_NAME_COLOR,
	};

	const companyNameStyle = {
		fontSize: `${companyFontSize || DEFAULT_COMPANY_SIZE}${companySizeUnit}`,
		fontFamily: companyFontFamily,
		fontWeight: companyFontWeight,
		textTransform: companyTextTransform,
		textDecoration: companyTextDecoration,
		letterSpacing: companyLetterSpacing
			? `${companyLetterSpacing}${companyLetterSpacingUnit}`
			: undefined,
		lineHeight: companyLineHeight
			? `${companyLineHeight}${companyLineHeightUnit}`
			: undefined,
		color: companyColor || DEFAULT_COMPANY_COLOR,
	};

	const descriptionStyle = {
		fontSize: `${
			descriptionFontSize || DEFAULT_DESCRIPTION_SIZE
		}${descriptionSizeUnit}`,
		fontFamily: descriptionFontFamily,
		fontWeight: descriptionFontWeight,
		textTransform: descriptionTextTransform,
		textDecoration: descriptionTextDecoration,
		letterSpacing: descriptionLetterSpacing
			? `${descriptionLetterSpacing}${companyLetterSpacingUnit}`
			: undefined,
		lineHeight: descriptionLineHeight
			? `${descriptionLineHeight}${companyLineHeightUnit}`
			: undefined,
		color: descriptionColor || DEFAULT_DESCRIPTION_COLOR,
		paddingRight: 20,
	};

	const quoteStyle = {
		color: quoteColor || DEFAULT_QUOTE_COLOR,
		fontSize: `${quoteSize || DEFAULT_QUOTE_SIZE}${quoteSizeUnit}`,
	};

	return [
		isSelected && <Inspector {...props} />,
		// Edit view here
		<div className="eb-testimonial-wrapper">
			<div className="eb-testimonial-container" style={containerStyle}>
				<div className="eb-avatar-container" style={avatarContainerStyle}>
					<div
						className="image-container"
						style={{
							...imageContainerStyle,
							display: displayAvatar ? "block" : "none",
						}}
					>
						<div
							className="eb-avatar-style"
							style={{
								backgroundImage: `url(${imageUrl})`,
								borderRadius: `${borderRadius}%`,
								display: imageUrl ? "block" : "none",
							}}
						/>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									imageUrl: media.url,
									imageId: media.id,
								})
							}
							type="image"
							value={imageId}
							render={({ open }) =>
								!imageUrl && (
									<Button
										className="eb-testimonial-image components-button"
										label={__("Upload Image")}
										icon="format-image"
										onClick={open}
									/>
								)
							}
						/>
					</div>

					<div className="eb-userinfo-container" style={userInfoStyle}>
						<RichText
							tagName="p"
							className="eb-testimonial-username"
							value={userName}
							onChange={(newName) => setAttributes({ userName: newName })}
							style={userNameStyle}
						/>

						<RichText
							tagName="p"
							className="eb-testimonial-company"
							value={companyName}
							onChange={(newName) => setAttributes({ companyName: newName })}
							style={companyNameStyle}
						/>
					</div>
				</div>

				<div className="eb-description-container">
					<div
						className="fas fa-quote-left eb-testimonial-quote-style"
						style={quoteStyle}
					/>
					<RichText
						tagName="p"
						value={description}
						onChange={(newText) => setAttributes({ description: newText })}
						style={descriptionStyle}
					/>
				</div>
			</div>
		</div>,
	];
};

export default Edit;
