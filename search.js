var box = document.getElementById("seq");

var enzymes = document.getElementById("enzymes");

var inputValid = true;

var patterns = {"RGGWCCY": ["PpuMI"], "GTAC": ["CviQI", "RsaI"], "GATGG": ["BccI"], "CCNNGG": ["BsaJI"], "GKGCMC": ["BaeGI"], "GCGATCGC": ["AsiSI"], "CACNNNGTG": ["DraIII"], "CRCCGGYG": ["SgrAI"], "ACATGT": ["PciI"], "GCGTC": ["HgaI"], "GGCGCGCC": ["AscI"], "CGRYCG": ["BsiEI"], "AGTACT": ["ScaI"], "AAGCTT": ["HindIII"], "ACGCGT": ["MluI"], "RGATCY": ["BstYI"], "CTCAAG": ["BpuEI"], "GCCGAG": ["NmeAIII"], "GGTACC": ["Acc65I", "KpnI"], "GGCGGA": ["EciI"], "CAGCTG": ["PvuII"], "GCTNAGG": ["Bpu10I"], "TTCGAA": ["BstBI"], "CGANNNNNNTGC": ["BcgI"], "TACGTA": ["SnaBI"], "CCTNNNNNAGG": ["EcoNI"], "TTAATTAA": ["PacI"], "GGTNACC": ["BstEII"], "GRCGYC": ["BsaHI"], "CTCCTC": ["BseRI"], "CTTGAG": ["BpuEI"], "GGCCNNNNNGGCC": ["SfiI"], "ACNNNNGTAYC": ["BaeI"], "CTGCAG": ["PstI"], "CTGAAG": ["AcuI"], "CTGCAC": ["BsgI"], "ATGCAT": ["NsiI"], "CATCGC": ["BtgZI"], "GCTCTTC": ["BspQI", "SapI"], "ACNGT": ["HpyCH4III"], "CYCGRG": ["AvaI", "BsoBI"], "GTATCC": ["BciVI"], "CCGCGG": ["SacII"], "ATTTAAAT": ["SwaI"], "TCACC": ["HphI"], "GCTGC": ["BbvI"], "GCATC": ["SfaNI"], "GAGTC": ["MlyI", "PleI"], "GATNNNNATC": ["BsaBI"], "GGTGA": ["HphI"], "CGGCCG": ["EagI"], "CTGGAG": ["BpmI"], "TCCRAC": ["MmeI"], "GCNGC": ["Fnu4HI"], "ACGGC": ["BceAI"], "ACTGG": ["BsrI"], "GGTCTC": ["BsaI"], "GACNNNGTC": ["PflFI", "Tth111I"], "CTYRAG": ["SmlI"], "GATC": ["BfuCI", "DpnII", "MboI", "Sau3AI"], "GACTC": ["MlyI", "PleI"], "GTSAC": ["Tsp45I"], "CTAG": ["BfaI"], "ACTAGT": ["SpeI"], "ACGT": ["HpyCH4IV"], "TCGCGA": ["NruI"], "CTTAAG": ["AflII"], "TCCGGA": ["BspEI"], "GAANNNNTTC": ["XmnI"], "CCTAGG": ["AvrII"], "GANTC": ["HinfI"], "GCAGGT": ["BfuAI", "BspMI"], "CGTACG": ["BsiWI"], "GGCC": ["HaeIII", "PhoI"], "GCTGGG": ["BseYI"], "CAATTG": ["MfeI"], "AGATCT": ["BglII"], "CASTG": ["TspRI"], "ACTGGG": ["BmrI"], "AGCGCT": ["AfeI"], "CTCGGC": ["NmeAIII"], "CCWWGG": ["StyI"], "RAATTY": ["ApoI"], "GCTAGC": ["BmtI", "NheI"], "CATATG": ["NdeI"], "CACGAG": ["BssSI"], "TCATGA": ["BspHI"], "ACCTGC": ["BfuAI", "BspMI"], "GATCC": ["AlwI"], "VCTCGAGB": ["PspXI"], "GCANNNNNNTCG": ["BcgI"], "CATTGC": ["BsrDI"], "GTGCAC": ["ApaLI"], "GTGCAG": ["BsgI"], "GGNCC": ["Sau96I"], "CCGG": ["HpaII", "MspI"], "CCGC": ["AciI"], "CTGAG": ["BspCNI"], "GAAGG": ["HpyAV"], "ACCWGGT": ["SexAI"], "GAAGA": ["MboII"], "ACCGGT": ["AgeI"], "GGNNCC": ["NlaIV"], "GRGCYC": ["BanII"], "CCTC": ["MnlI"], "CCANNNNNTGG": ["PflMI"], "GTATAC": ["BstZ17I"], "GTTAAC": ["HpaI"], "GCNNNNNNNGC": ["MwoI"], "GACGC": ["HgaI"], "GCTNAGC": ["BlpI"], "TCGA": ["TaqI"], "GAGGAG": ["BseRI"], "GACNNNNNGTC": ["AhdI"], "TGCA": ["HpyCH4V"], "CGATCG": ["PvuI"], "GAAGAC": ["BbsI"], "CGTCTC": ["BsmBI"], "GTYRAC": ["HincII"], "CCTNAGG": ["Bsu36I"], "CTCTTC": ["EarI"], "CMGCKG": ["MspA1I"], "CTRYAG": ["SfcI"], "GACNNNNGTC": ["PshAI"], "CACTGC": ["BtsI"], "GTCCC": ["BsmFI"], "CTCGAG": ["PaeR7I", "TliI", "XhoI"], "CTCAG": ["BspCNI"], "CCNNNNNNNGG": ["BslI"], "CCWGG": ["BstNI", "PspGI"], "TCCGCC": ["EciI"], "GCGGG": ["FauI"], "CTCGTG": ["BssSI"], "GCCGT": ["BceAI"], "TCNGA": ["Hpy188I"], "CACNNNNGTG": ["AleI"], "GGATG": ["BtsCI", "FokI"], "CCSGG": ["NciI"], "YGGCCR": ["EaeI"], "CCCGGG": ["SmaI", "TspMI", "XmaI"], "ATCGAT": ["BspDI", "ClaI"], "TGATCA": ["BclI"], "GACGTC": ["AatII", "ZraI"], "GCAGC": ["BbvI"], "TTTAAA": ["DraI"], "GCNNGC": ["Cac8I"], "GACGTG": ["BmgBI"], "GAATTC": ["EcoRI"], "CAANNNNNGTGG": ["CspCI"], "CATCC": ["BtsCI", "FokI"], "CTCCAG": ["BpmI"], "CCCGC": ["FauI"], "CCAGT": ["BsrI"], "WCCGGW": ["BsaWI"], "AACGTT": ["AclI"], "GTTTAAAC": ["PmeI"], "GCATTC": ["BsmI"], "CCCAGC": ["BseYI"], "TCTTC": ["MboII"], "CGGWCCG": ["RsrII"], "GATATC": ["EcoRV"], "CCATGG": ["NcoI"], "GAGAC": ["BsmAI"], "RCATGY": ["NspI"], "CGCG": ["BstUI"], "CCCAGT": ["BmrI"], "CGWCG": ["Hpy99I"], "CCGCTC": ["BsrBI"], "RCCGGY": ["BsrFI"], "AATT": ["Tsp509I"], "CCNGG": ["BssKI", "ScrFI", "StyD4I"], "TGTACA": ["BsrGI"], "GTNNAC": ["Hpy166II"], "GCGCGC": ["BssHII"], "RGCGCY": ["HaeII"], "GGGAC": ["BsmFI"], "GGATAC": ["BciVI"], "GCATGC": ["SphI"], "YACGTR": ["BsaAI"], "GTCGAC": ["SalI"], "GDGCHC": ["Bsp1286I"], "GCAGTG": ["BtsI"], "TCTAGA": ["XbaI"], "GGATC": ["AlwI"], "GWGCWC": ["BsiHKAI"], "TCNNGA": ["Hpy188III"], "CCTGCAGG": ["SbfI"], "GCTGAGG": ["BbvCI"], "TTAA": ["MseI"], "ATTAAT": ["AseI"], "ACRYGT": ["AflIII"], "GCCNNNNNGGC": ["BglI"], "GAATGC": ["BsmI"], "CCRYGG": ["BtgI"], "CCTTC": ["HpyAV"], "GTMKAC": ["AccI"], "TGCGCA": ["FspI"], "GAAGAGC": ["BspQI", "SapI"], "CTNAG": ["DdeI"], "GAGACG": ["BsmBI"], "GCCGGC": ["NaeI", "NgoMIV"], "TGGCCA": ["MscI"], "CAYNNNNRTG": ["MslI"], "GACNNNNNNGTC": ["DrdI"], "GAAGAG": ["EarI"], "GCWGC": ["ApeKI", "TseI"], "GAGG": ["MnlI"], "GCANNNNNTGC": ["BstAPI"], "CCACNNNNNTTG": ["CspCI"], "GGCGCC": ["KasI", "NarI", "SfoI"], "GAWTC": ["TfiI"], "GGAGNNNNNGT": ["BsaXI"], "GATGC": ["SfaNI"], "AGCT": ["AluI"], "GGATCC": ["BamHI"], "AATATT": ["SspI"], "GCGGCCGC": ["NotI"], "CACGTG": ["PmlI"], "CACGTC": ["BmgBI"], "GCGC": ["HhaI", "HinP1I"], "CTTCAG": ["AcuI"], "GCGG": ["AciI"], "CCTNAGC": ["Bpu10I"], "GTYGGA": ["MmeI"], "CCTCAGC": ["BbvCI"], "GRTACNNNNGT": ["BaeI"], "GGGCCC": ["ApaI", "PspOMI"], "ACNNNNNCTCC": ["BsaXI"], "CCATC": ["BccI"], "GGYRCC": ["BanI"], "GGCCGGCC": ["FseI"], "GCAATG": ["BsrDI"], "GGWCC": ["AvaII"], "CATG": ["CviAII", "FatI", "NlaIII"], "CCANNNNNNNNNTGG": ["XcmI"], "GAGACC": ["BsaI"], "RGGNCCY": ["EcoO109I"], "CCANNNNNNTGG": ["BstXI"], "GAGCTC": ["Eco53kI", "SacI"], "RGCY": ["CviKI-1"], "AGGCCT": ["StuI"], "GAGCGG": ["BsrBI"], "TTATAA": ["PsiI"], "CAGNNNCTG": ["AlwNI"], "GTCTC": ["BsmAI"], "GCGATG": ["BtgZI"], "GTCTTC": ["BbsI"]};

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
		var val = box.value.toUpperCase();
		document.getElementById("output").className = "output";
		updateErrors(validData.errors, validData.notices);
		var data = triesearch(retree, val);
		enzymes.innerHTML = ""
		for(var enz in data)
		{
				var enzdata = document.createElement("li");
				console.log("data123:", enz, data[enz]);
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
		var val = box.value.toUpperCase();
		document.getElementById("output").className = "output";
	}
	else
	{
		var val1 = "";
		document.getElementById("output").className = "outh";
	}
	updateErrors(validData.errors, validData.notices);
	//console.log(retree, val);
	var data = triesearch(retree, val);
	enzymes.innerHTML = ""
	for(var enz in data)
	{
			var enzdata = document.createElement("li");
			console.log("data123:", data[enz]);
			enzdata.innerHTML = enz+processData(data[enz]);
			enzdata.className = "enzyme";
			enzymes.appendChild(enzdata);
	}
	enzymes.id = "s1a"; //!!!
	enzymes.className = "data";
}

function validateInput()
{
	var dataobj = {valid:true, errors:[], notices:[]};
	var val = box.value.toUpperCase();
	var strbases = "ATCG";
	if(val == "")
	{
		dataobj.valid = false;
		dataobj.notices.push("Please enter a DNA sequence, <br>or <a class=\"btn-link\" onclick=\"initExample()\">use an example sequence</a>.");
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
	var val = box.value.toUpperCase();
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
		//console.log(retree, val);
		var data = triesearch(retree, val);
		enzymes.innerHTML = ""
		for(var enz in data)
		{
				var enzdata = document.createElement("li");
				console.log("data123:", data[enz]);
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
		//var curposarr = [[Object.assign({}, retree[0])]];
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
			console.log("debug:", chars);
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
					//console.log("errorcheck:", curpos[_char2]);
					curposarrnew.push([curpos[_char2][0]]);
				}
				//console.log("errorcheck:", prevposarr[j]);
				//prevposarr[j] = [Object.assign(prevposarr[j], curpos)];
				j = j+1;
			}
			//prevpos = [prevpos[0]];
			curposarr = curposarrnew;
			i = i+1;
		}
	}
	console.log("retree:", retree);
	return retree;
}

function triesearch(retree, seq)
{
	//console.log("seq:", seq);
	//console.log("retree:", retree);
	var sitestree = {};
	var i = 0;
	for(var _char of seq)
	{
		var j = i*1;
		var curpos = retree;
		//console.log("info", curpos[0], seq[j], j, seq.length, j<seq.length, curpos[0].hasOwnProperty(seq[j]));
		while(j<seq.length && curpos[0].hasOwnProperty(seq[j]))
		{
			//console.log("test!!!!");
			//console.log("curpos_1:", curpos);
			curpos = curpos[0][seq[j]];
			j = j+1;
			//console.log("curpos_2:", curpos);
			var newsitestree = curpos[1];
			//console.log("newsitestree:", newsitestree);
			for(var site of newsitestree)
			{
				//console.log("site:", site);
				if(!sitestree.hasOwnProperty(site))
				{
					sitestree[site] = [i];
				}
				else
				{	
					sitestree[site].push(i)
				}
			}
		}
		i = i+1;
	}
	return sitestree;
}
