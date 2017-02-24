var box = document.getElementById("seq");

var enzymes = document.getElementById("enzymes");

var inputValid = true;

var patterns = {"RGGWCCY": ["Psp5II", "PspPPI", "PpuMI"], "GTAC": ["RsaNI", "RsaI", "CviQI", "Csp6I", "AfaI"], "AACGTT": ["AclI", "Psp1406I"], "ACNGT": ["TaaI", "Bst4CI", "HpyCH4III"], "CNNR": ["MspJI"], "YATR": ["FaiI"], "GCGATCGC": ["SfaAI", "RgaI", "SgfI", "AsiSI"], "RCATGY": ["BstNSI", "XceI", "NspI"], "CNNG": ["SgeI"], "CRCCGGYG": ["SgrAI"], "ACATGT": ["PscI", "PciI"], "GCGTC": ["CseI!", "HgaI!"], "CGCCGGCG": ["MreI"], "CGRYCG": ["BstMCI", "BsiEI", "Bsh1285I"], "AGTACT": ["BmcAI", "ZrmI", "ScaI"], "AAGCTT": ["HindIII"], "ACGCGT": ["MluI"], "GCGGG": ["FauI!"], "RGATCY": ["BstX2I", "PsuI", "XhoII", "MflI", "BstYI"], "CTCAAG": ["BpuEI!"], "GCCGAG": ["NmeAIII"], "GGTACC": ["Asp718I", "KpnI", "Acc65I"], "GGCGGA": ["EciI"], "CAGCTG": ["PvuII"], "CTGAAG": ["Eco57I", "AcuI"], "TTCGAA": ["AsuII", "Bpu14I", "BspT104I", "Bsp119I", "SfuI", "NspV", "BstBI"], "CCAANNNNNNNTTC": ["AjuI!"], "TACGTA": ["BstSNI", "Eco105I", "SnaBI"], "GGATCC": ["BamHI"], "GCGCNGCGC": ["MteI"], "CCTNNNNNAGG": ["BstENI", "EcoNI", "XagI"], "GCAGGTG": ["AarI!"], "RAATTY": ["ApoI", "AcsI", "XapI"], "GGTNACC": ["BstEII", "EcoO65I", "PspEI", "Eco91I", "BstPI"], "CTCCTC": ["BseRI!"], "CTTGAG": ["BpuEI"], "TTCAT": ["TspDTI!"], "GATGG": ["BccI!"], "TCCNGGA": ["PfoI"], "GAGACG": ["Esp3I!", "BsmBI!"], "AAGNNNNNCTT": ["FalI"], "GCTGC": ["BseXI!", "BstV1I!", "Lsp1109I!", "BbvI!"], "GATCC": ["Nt.AlwI!", "AlwI!", "AclWI!", "BspPI!"], "CTCTTC": ["Eam1104I", "Bst6I", "EarI"], "CTGCAC": ["BsgI!"], "GG": ["FspEI!"], "ATGCAT": ["Zsp2I", "Mph1103I", "NsiI", "EcoT22I"], "GTMKAC": ["XmiI", "AccI", "FblI"], "GKGCMC": ["BseSI", "BaeGI", "BstSLI"], "WCGNNNNNNNCGW": ["PcsI"], "GAACNNNNNNTAC": ["PsrI"], "GTATCC": ["BsuI", "BciVI", "BfuI"], "CCGCGG": ["SgrBI", "SacII", "Sfr303I", "Cfr42I", "KspI"], "ATTTAAAT": ["SmiI", "SwaI"], "TCACC": ["AsuHPI!", "HphI!"], "TCCGT": ["TspGWI!"], "GCATC": ["LweI", "BmsI", "SfaNI"], "GAGTC": ["MlyI", "Nt.BstNBI", "SchI", "Nt.Bst9I", "PleI", "PpsI"], "GATNNNNATC": ["BsaBI", "BseJI", "Bse8I"], "GGTGA": ["AsuHPI", "HphI"], "CGGCCG": ["Eco52I", "BseX3I", "EagI", "EclXI", "BstZI"], "CTGGAG": ["GsuI", "BpmI"], "CRAANNNNNNGTC": ["ArsI!"], "GCNGC": ["BisI", "GluI", "Fsp4HI", "SatI", "BlsI", "PkrI", "Fnu4HI"], "ACGGC": ["BceAI"], "ACGGA": ["TspGWI"], "ACTGG": ["BsrI", "Bse1I", "BseNI"], "GGTCTC": ["BspTNI", "BsaI", "Bso31I", "Eco31I"], "CCCWGGG": ["PasI"], "TTAA": ["Tru1I", "MseI", "SaqAI", "Tru9I"], "GACNNNGTC": ["PsyI", "PflFI", "Tth111I"], "ASST": ["SetI"], "CTYRAG": ["SmlI", "SmoI"], "GCANNNNNNTCG": ["BcgI!"], "GACTC": ["MlyI!", "Nt.BstNBI!", "SchI!", "Nt.Bst9I!", "PleI!", "PpsI!"], "CCNNNNNNNGG": ["Bsc4I", "BseLI", "AfiI", "BslI"], "YNNG": ["MspJI!"], "CTAG": ["XspI", "BfaI", "FspBI", "MaeI", "SspMI"], "ACTAGT": ["AhlI", "BcuI", "SpeI"], "ACGT": ["HpyCH4IV", "MaeII", "TaiI", "HpySE526I"], "TCGCGA": ["Bsp68I", "BtuMI", "NruI", "RruI"], "CTTAAG": ["Vha464I", "AflII", "BspTI", "MspCI", "BfrI", "BstAFI"], "TCCGGA": ["BseAI", "Kpn2I", "Bsp13I", "AccIII", "Aor13HI", "BspEI", "MroI"], "CCDG": ["LpnPI"], "GAANNNNTTC": ["XmnI", "MroXI", "PdmI", "Asp700I"], "CCTAGG": ["AvrII", "AspA2I", "XmaJI", "BlnI"], "GGCGCGCC": ["PalAI", "SgsI", "AscI"], "GCAGGT": ["BveI!", "BfuAI!", "BspMI!", "Acc36I!"], "ATTAAT": ["PshBI", "AseI", "VspI"], "GGCC": ["BshFI", "BsnI", "BspANI", "BsuRI", "HaeIII", "AoxI"], "GCTGGG": ["PspFI!", "BseYI!", "GsaI!"], "CAATTG": ["MfeI", "MunI"], "AGATCT": ["BglII"], "CASTG": ["TspRI", "TscAI"], "GTGCAG": ["BsgI"], "GGGAC": ["FaqI", "BsmFI", "BslFI"], "ACTGGG": ["BmrI", "BmuI"], "AGCGCT": ["Eco47III", "Aor51HI", "AfeI"], "CYCGRG": ["Ama87I", "AvaI", "BmeT110I", "BsoBI", "BsiHKCI", "Eco88I"], "CCANNNNNNTGG": ["BstXI"], "CCWWGG": ["BssT1I", "EcoT14I", "Eco130I", "ErhI", "StyI"], "GRCGYC": ["BstACI", "BsaHI", "Hin1I", "Hsp92I", "BssNI", "AcyI"], "GCTAGC": ["AsuNHI", "BmtI", "BspOI", "NheI"], "CATATG": ["FauNDI", "NdeI"], "CACGAG": ["Bst2BI", "Nb.BssSI", "BssSI", "BauI"], "TCATGA": ["CciI", "BspHI", "PagI"], "CCTCGAGG": ["AbsI"], "ACCTGC": ["BveI", "BfuAI", "BspMI", "Acc36I"], "GCTCTTC": ["Nt.BspQI", "BspQI", "SapI", "LguI", "PciSI"], "CACNNNNGTG": ["OliI", "AleI"], "VCTCGAGB": ["PspXI"], "GATC": ["BssMI", "DpnII", "DpnI", "MalI", "MboI", "BstKTI", "Kzo9I", "Bsp143I", "Sau3AI", "NdeII", "BstMBI", "BfuCI"], "WCCGGW": ["BsaWI"], "GTGCAC": ["VneI", "ApaLI", "Alw44I"], "C": ["AbaSI"], "GAANNNNNNNTTGG": ["AjuI"], "G": ["AbaSI!"], "GGNCC": ["PspPI", "BmgT120I", "AspS9I", "Sau96I", "Cfr13I"], "CCGG": ["HpaII", "HapII", "MspI", "BsiSI"], "CCGC": ["BspACI", "SsiI", "AciI"], "CACTG": ["BtsIMutI!"], "ACNNNNGTAYC": ["BaeI"], "CTGAG": ["BspCNI!", "BseMII!"], "GAAGG": ["HpyAV!"], "ACCWGGT": ["SexAI", "MabI", "CsiI"], "GAAGA": ["MboII"], "ACCGGT": ["BshTI", "AsiGI", "PinAI", "CspAI", "AgeI"], "GGNNCC": ["PspN4I", "BmiI", "BspLI", "NlaIV"], "GRGCYC": ["EcoT38I", "BanII", "Eco24I", "FriOI"], "GCCCGGGC": ["SrfI"], "CAGTG": ["BtsIMutI"], "CCANNNNNTGG": ["Van91I", "AccB7I", "PflMI"], "CGCGCGCG": ["MauBI"], "GTTAAC": ["KspAI", "HpaI"], "TGCA": ["HpyCH4V"], "TCCRAC": ["MmeI"], "GCNNNNNNNGC": ["MwoI", "BstMWI", "HpyF10VI"], "GACGC": ["CseI", "HgaI"], "TCTAGA": ["XbaI"], "TCGA": ["TaqI"], "GAGGAG": ["BseRI"], "GACNNNNNGTC": ["BmeRI", "Eam1105I", "AhdI", "DriI"], "GAACNNNNNNTCC": ["AloI"], "CGATCG": ["PvuI", "Ple19I"], "GAAGAC": ["BstV2I", "BpiI", "BbsI"], "CCTNAGC": ["Bpu10I", "Nt.Bpu10I", "Nb.Bpu10I"], "GTYRAC": ["HincII", "HindII"], "GAGACC": ["BspTNI!", "BsaI!", "Bso31I!", "Eco31I!"], "GGANNNNNNGTTC": ["AloI!"], "GTANNNNNNCTTC": ["BarI!"], "GANTC": ["HinfI"], "CTCGGC": ["NmeAIII!"], "CMGCKG": ["MspA1I"], "CTRYAG": ["BstSFI", "BfmI", "SfcI"], "CCTCAGC": ["Nb.BbvCI", "Nt.BbvCI", "BbvCI"], "CACTGC": ["Nb.BtsI!", "BtsI!"], "ATGAA": ["TspDTI"], "GTCCC": ["FaqI!", "BsmFI!", "BslFI!"], "CTCGAG": ["Sfr274I", "XhoI", "SlaI", "PaeR7I"], "CGTCGACG": ["SgrDI"], "GTSAC": ["TseFI", "Tsp45I", "NmuCI"], "CCWGG": ["Bst2UI", "PspGI", "AjnI", "BstNI", "BseBI", "MvaI", "EcoRII", "BciT130I", "Psp6I"], "CCTC": ["MnlI"], "TCCGCC": ["EciI!"], "CTNAG": ["BstDEI", "DdeI", "HpyF3I"], "CGANNNNNNTGC": ["BcgI"], "GCCGT": ["BceAI!"], "TCNGA": ["Hpy188I"], "CCCGC": ["FauI"], "GGATG": ["BstF5I", "BtsCI", "BseGI", "FokI"], "CCSGG": ["BpuMI", "NciI", "AsuC2I", "BcnI"], "YGGCCR": ["AcoI", "EaeI"], "CCCGGG": ["TspMI", "Cfr9I", "SmaI", "XmaI"], "CTGCAG": ["PstI", "BspMAI"], "ATCGAT": ["Bsu15I", "ClaI", "BshVI", "BseCI", "Bsa29I", "BsuTUI", "BspDI"], "TGATCA": ["BclI", "Ksp22I", "FbaI"], "GACGTC": ["ZraI", "AatII"], "GCAGC": ["BseXI", "BstV1I", "Lsp1109I", "BbvI"], "TTTAAA": ["DraI"], "GACNNNNGTC": ["PshAI", "BoxI", "BstPAI"], "GACGTG": ["BmgBI!", "BtrI!", "AjiI!"], "GAATTC": ["EcoRI"], "CAANNNNNGTGG": ["CspCI"], "CATCC": ["BstF5I!", "BtsCI!", "BseGI!", "FokI!"], "CATTGC": ["Nb.BsrDI!", "Bse3DI!", "BsrDI!", "BseMI!"], "CCNNGG": ["BssECI", "BseDI", "BsaJI"], "RTGCGCAY": ["FspAI"], "CCAGT": ["BsrI!", "Bse1I!", "BseNI!"], "CGTCTC": ["Esp3I", "BsmBI"], "CTCCAG": ["GsuI!", "BpmI!"], "GTATAC": ["Bst1107I", "BssNAI", "BstZ17I"], "TGCGCA": ["FspI", "Acc16I", "NsbI"], "GCTCC": ["LmnI"], "GTTTAAAC": ["PmeI", "MssI"], "CC": ["FspEI"], "ACRYGT": ["AflIII"], "CCCAGC": ["PspFI", "BseYI", "GsaI"], "TCTTC": ["MboII!"], "CGGWCCG": ["Rsr2I", "CpoI", "CspI", "RsrII"], "GATATC": ["EcoRV", "Eco32I"], "CCATGG": ["NcoI", "Bsp19I"], "GAGAC": ["BcoDI!", "Alw26I!", "BsmAI!", "Nt.BsmAI!", "BstMAI!"], "CACNNNGTG": ["AdeI", "DraIII"], "CCTTC": ["HpyAV"], "CHGG": ["LpnPI!"], "CCCAGT": ["BmrI!", "BmuI!"], "CGWCG": ["Hpy99I"], "CCGCTC": ["BsrBI", "AccBSI", "MbiI"], "RCCGGY": ["BsrFI", "BssAI", "Bse118I", "Cfr10I"], "AATT": ["TasI", "MluCI", "Sse9I"], "CCNGG": ["StyD4I", "Bme1390I", "BmrFI", "BstSCI", "ScrFI", "MspR9I"], "GTNNAC": ["Hpy166II", "Hpy8I"], "GCGCGC": ["BssHII", "PauI", "PteI", "BsePI"], "RGCGCY": ["HaeII", "BstH2I", "BfoI"], "GACCGA": ["TaqII"], "GAGNNNNNCTC": ["BplI"], "GGATAC": ["BsuI!", "BciVI!", "BfuI!"], "GCATGC": ["PaeI", "SphI"], "GCTNAGG": ["Bpu10I!", "Nt.Bpu10I!", "Nb.Bpu10I!"], "GTCGAC": ["SalI"], "GDGCHC": ["SduI", "Bsp1286I", "MhlI"], "GCAGTG": ["Nb.BtsI", "BtsI"], "GCTNAGC": ["Bpu1102I", "BlpI", "Bsp1720I"], "GWGCWC": ["BsiHKAI", "Alw21I", "Bbv12I"], "TCNNGA": ["Hpy188III"], "GAGCTC": ["SacI", "Psp124BI", "SstI", "Eco53kI", "Ecl136II", "EcoICRI"], "CTCGTG": ["Bst2BI!", "Nb.BssSI!", "BssSI!", "BauI!"], "GCTGAGG": ["Nb.BbvCI!", "Nt.BbvCI!", "BbvCI!"], "TCGGTC": ["TaqII!"], "CATCGC": ["BtgZI!"], "CGTACG": ["BsiWI", "PspLI", "Pfl23II"], "GCATTC": ["Mva1269I!", "BsmI!", "Nb.Mva1269I!", "Nb.BsmI!", "PctI!"], "GCCNNNNNGGC": ["BglI"], "GGGWCCC": ["KflI"], "GAATGC": ["Mva1269I", "BsmI", "Nb.Mva1269I", "Nb.BsmI", "PctI"], "CCRYGG": ["BtgI", "BstDSI"], "GGCCNNNNNGGCC": ["SfiI"], "GGATC": ["Nt.AlwI", "AlwI", "AclWI", "BspPI"], "CATG": ["FaeI", "Hin1II", "CviAII", "NlaIII", "Hsp92II", "FatI"], "GAAGAGC": ["Nt.BspQI!", "BspQI!", "SapI!", "LguI!", "PciSI!"], "GCSGC": ["TauI"], "TGTACA": ["Bsp1407I", "BstAUI", "BsrGI"], "GACNNNNNNTTYG": ["ArsI"], "GGAGC": ["LmnI!"], "WGTACW": ["TatI"], "YACGTR": ["Ppu21I", "BstBAI", "BsaAI"], "GCNNGC": ["BstC8I", "Cac8I"], "GCCGGC": ["NgoMIV", "KroI", "NaeI", "MroNI", "PdiI"], "TGGCCA": ["MlsI", "MscI", "MluNI", "Msp20I", "Mox20I", "BalI"], "CAYNNNNRTG": ["MslI", "RseI", "SmiMI"], "GACNNNNNNGTC": ["DrdI", "DseDI", "AasI"], "GAAGAG": ["Eam1104I!", "Bst6I!", "EarI!"], "GCWGC": ["ApeKI", "TseI"], "GAGG": ["MnlI!"], "GCANNNNNTGC": ["BstAPI"], "CCACNNNNNTTG": ["CspCI!"], "GGCGCC": ["EgeI", "SspDI", "SfoI", "NarI", "Mly113I", "EheI", "DinI", "PluTI", "KasI"], "GAWTC": ["TfiI", "PfeI"], "GGAGNNNNNGT": ["BsaXI!"], "GATGC": ["LweI!", "BmsI!", "SfaNI!"], "AGCT": ["AluBI", "AluI"], "CTCAG": ["BspCNI", "BseMII"], "AATATT": ["SspI"], "GCGGCCGC": ["CciNI", "NotI"], "CACGTG": ["PmaCI", "AcvI", "PmlI", "Eco72I", "BbrPI", "PspCI"], "TTSAA": ["AgsI"], "CACGTC": ["BmgBI", "BtrI", "AjiI"], "GCGC": ["BstHHI", "AspLEI", "Hin6I", "GlaI", "CfoI", "HinP1I", "HspAI", "HhaI"], "CTTCAG": ["Eco57I!", "AcuI!"], "TTAATTAA": ["PacI"], "GCGG": ["BspACI!", "SsiI!", "AciI!"], "GAAGNNNNNNTAC": ["BarI"], "CGCG": ["AccII", "Bsh1236I", "MvnI", "BstFNI", "BstUI", "BspFNI"], "GTYGGA": ["MmeI!"], "CCATC": ["BccI"], "GRTACNNNNGT": ["BaeI!"], "GTANNNNNNGTTC": ["PsrI!"], "GGGCCC": ["PspOMI", "ApaI", "Bsp120I"], "ACNNNNNCTCC": ["BsaXI"], "GGYRCC": ["BspT107I", "BshNI", "BanI", "AccB1I"], "GGCCGGCC": ["FseI", "RigI"], "GCAATG": ["Nb.BsrDI", "Bse3DI", "BsrDI", "BseMI"], "GGWCC": ["SinI", "Eco47I", "Bme18I", "VpaK11BI", "AvaII"], "CACCTGC": ["AarI"], "CCANNNNNNNNNTGG": ["XcmI"], "CCTNAGG": ["AxyI", "Bsu36I", "Bse21I", "Eco81I"], "RGGNCCY": ["DraII", "EcoO109I"], "CCTGCAGG": ["SdaI", "Sse8387I", "SbfI"], "RGCY": ["CviJI", "CviKI-1"], "AGGCCT": ["SseBI", "StuI", "Eco147I", "PceI"], "GAGCGG": ["BsrBI!", "AccBSI!", "MbiI!"], "TTATAA": ["PsiI", "AanI"], "GTNAC": ["MaeIII"], "CAGNNNCTG": ["AlwNI", "PstNI", "CaiI"], "GTCTC": ["BcoDI", "Alw26I", "BsmAI", "Nt.BsmAI", "BstMAI"], "GCGATG": ["BtgZI"], "GTCTTC": ["BstV2I!", "BpiI!", "BbsI!"]};

var ambigs = {"A":["A"], "T":["T"], "C":["C"], "G":["G"], "N": ["A", "T", "C", "G"], "W": ["A", "T"], "S": ["C", "G"], "M": ["A", "C"], "K": ["T", "G"], "R": ["A", "G"], "Y": ["T", "C"], "B": ["T", "C", "G"], "V": ["A", "C", "G"], "D": ["A", "T", "G"], "H": ["A", "T", "C"]};

var retree = [{}, []]

function init()
{
	retree = generateTrie(patterns);
	validData = validateInput();
	inputValid = validData.valid;
	updateErrors(validData.errors, validData.notices);
	if(inputValid)
	{
		var val = box.value.toUpperCase().replace(RegExp(/>.*?\n/g), '').replace(new RegExp(/\s/g), '');
		document.getElementById("output").className = "output";
		updateErrors(validData.errors, validData.notices);
		var other = document.getElementById("otherstrand").checked;
		var data = triesearch(retree, val, other);
		enzymes.innerHTML = ""
		for(var enz in data)
		{
				var enzdata = document.createElement("li");
				console.log(enz);
				enzdata.innerHTML = enz+processData(data[enz]);
				enzdata.className = "enzyme";
				enzymes.appendChild(enzdata);
		}
		enzymes.id = "s1a"; //!!!
		enzymes.className = "data";
	}
}

function processData(data)
{
	var str = " Positions: "
	if(data.length>0)
	{
		data.forEach(function(enz){
			str = str+(Number(enz)+1)+", ";
		})
	}
	return str.slice(0, str.length-2);
}

var keypresshandler = function(event){
	var strbases = "ATCG";
	if(event.target.id == "seq")
	{
		if((!strbases.includes(event.key)) && (!strbases.toLowerCase().includes(event.key)) && (event.key.length == 1) && !(event.ctrlKey || event.altKey || event.metaKey))
		{
			event.preventDefault();
		}
	}
}

document.getElementById("seq").addEventListener("keydown", keypresshandler);

function initExample()
{
	
	box.value = "gaattctaga";
	validData = validateInput();
	inputValid = validData.valid;
	if(inputValid)
	{
		var val = box.value.toUpperCase().replace(RegExp(/>.*?\n/g), '').replace(new RegExp(/\s/g), '');
		document.getElementById("output").className = "output";
	}
	else
	{
		var val1 = "";
		document.getElementById("output").className = "outh";
	}
	updateErrors(validData.errors, validData.notices);
	var other = document.getElementById("otherstrand").checked;
	var data = triesearch(retree, val, other);
	enzymes.innerHTML = ""
	for(var enz in data)
	{
			var enzdata = document.createElement("li");
			console.log(enz);
			enzdata.innerHTML = enz+processData(data[enz]);
			enzdata.className = "enzyme";
			enzymes.appendChild(enzdata);
	}
	enzymes.id = "s1a"; //!!!
	enzymes.className = "data";
}

function validateInput()
{
	var fasta_flag = false;
	var dataobj = {valid:true, errors:[], notices:[]};
	var val = box.value.toUpperCase().replace(RegExp(/>.*?\n/g), '').replace(new RegExp(/\s/g), '');
	var strbases = "ATCG";
	if(val.length == 0 && box.value.toUpperCase().replace(new RegExp(/\s/g), '').length > 0)
	{
		dataobj.valid = false;
		dataobj.errors.push("Detected FASTA file is empty.");
		fasta_flag = true;

	}
	if(val == "" && !fasta_flag)
	{
		dataobj.valid = false;
		dataobj.notices.push("Please enter a DNA sequence, <br>or <a class=\"btn-link\" onclick=\"initExample()\">use an example sequence</a>.");
	}
	if(val.length > 1000000)
	{
		dataobj.valid = false;
		dataobj.errors.push("Search sequence is too long (limit: 1 Mb).");
	}
	for(i = 0; i<val.length; i++)
	{
		if(!strbases.includes(val[i]))
		{
			dataobj.valid = false;
			dataobj.errors.push("Search sequence is invalid.");
			break;
		}
	}
	return dataobj;

}

function updateErrors(errors, notices)
{
	errlist = document.getElementById("errors")
	errlist.innerHTML = "";
	errlist.id = "errors";
	errlist.className = "outerr";
	if(errors.length > 0)
	{
		errors.forEach(function (error) {
			var err = document.createElement("li");
			err.innerHTML = error;
			err.className = "error";
			errlist.appendChild(err);
		});
	}

	if(notices.length > 0)
	{
		notices.forEach(function (notice) {
			var err = document.createElement("li");
			err.innerHTML = notice;
			err.className = "notice";
			errlist.appendChild(err);
		});
	}

	if(errors.length == 0 && notices.length == 0)
	{
		errlist = document.getElementById("errors")
		errlist.innerHTML = "";
		errlist.id = "errors";
		errlist.className = "outh";
	}
}


var seqhandler = function(event){
	var val = box.value.toUpperCase().replace(RegExp(/>.*?\n/g), '').replace(new RegExp(/\s/g), '');
	var strbases = "ATCG";

	validData = validateInput();
	inputValid = validData.valid;
	if(inputValid)
	{
		document.getElementById("output").className = "output";
	}
	else
	{
		document.getElementById("output").className = "outh";
	}
	updateErrors(validData.errors, validData.notices);
	if(inputValid && val != "")
	{
		var other = document.getElementById("otherstrand").checked;
		var data = triesearch(retree, val, other);
		enzymes.innerHTML = ""
		for(var enz in data)
		{
				var enzdata = document.createElement("li");
				console.log(enz);
				enzdata.innerHTML = enz+processData(data[enz]);
				enzdata.className = "enzyme";
				enzymes.appendChild(enzdata);
		}
		enzymes.id = "s1a"; //!!!
		enzymes.className = "data";
	}
	else
	{
		document.getElementById("output").className = "outh";
	}

};

box.addEventListener("input", seqhandler);

document.getElementById("otherstrand").addEventListener("change", seqhandler);

function addels(list1, list2)
{
	list3 = list1.slice();
	for(var e of list2)
	{
		if(!list1.includes(e))
		{
			list3.push(e);
		}
	}
	return list3;
}

function allenzm(substr, reseqs)
{
	var outarr = [];
	if(reseqs.hasOwnProperty(substr))
	{
		outarr = reseqs[substr];
	}
	return outarr;
}

function generateTrie(reseqs)
{
	var retree = [{}, []];
	for(var seq in reseqs)
	{
		var i = 0;
		var curposarr = [[retree[0]]];
		var curposarrnew = [];
		var chars;
		for(var _char of seq)
		{
			curposarrnew = [];
			chars = [_char];
			var validchars = ["A", "T", "C", "G"];
			if(!validchars.includes(_char))
			{
				chars = ambigs[_char];
			}
			var j = 0
			for(var curpos of curposarr)
			{
				curpos = curpos[0];
				for(var _char2 of chars)
				{
					var enzl = [{}, allenzm(seq.slice(0, i+1), reseqs)]
					if(!curpos.hasOwnProperty(_char2))
					{
						curpos[_char2] = enzl;
					}
					else
					{
						var _new = addels(curpos[_char2][1], enzl[1]);
						curpos[_char2][1] = _new;
					}
					curposarrnew.push([curpos[_char2][0]]);
				}
				j = j+1;
			}
			curposarr = curposarrnew;
			i = i+1;
		}
	}
	return retree;
}

function triesearch(retree, seq, other)
{
	var sitestree = {};
	var i = 0;
	for(var _char of seq)
	{
		var j = i*1;
		var curpos = retree;
		while(j<seq.length && curpos[0].hasOwnProperty(seq[j]))
		{
			curpos = curpos[0][seq[j]];
			j = j+1;
			var newsitestree = curpos[1];
			for(var site of newsitestree)
			{
				if(!sitestree.hasOwnProperty(site) && !site.endsWith("!") || (site.endsWith("!") && !sitestree.hasOwnProperty(site.slice(0,site.length-1)) && other))
				{
					if(site.endsWith("!"))
					{
						sitestree[site.slice(0,site.length-1)] = [i];
					}
					else
					{
						sitestree[site] = [i];
					}
				}
				else
				{
					if(site.endsWith("!") && other)
					{
						sitestree[site.slice(0,site.length-1)].push(i)
					}
					else if(site.endsWith("!") && !other)
					{	
						
					}
					else
					{
						sitestree[site].push(i)
					}
				}
			}
		}
		i = i+1;
	}
	return sitestree;
}
