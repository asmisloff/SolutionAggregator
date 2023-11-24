interface Complex {
    re: number
    im: number
}

interface Verifiable<T> {
    value: T
    cf: number
    annotation?: string
}

enum WireAndRailType {
    FIDER = "Fider",
    CONTACT = "CONTACT",
    POWER = "POWER",
    SHIELD = "SHIELD",
    SUPPLY = "SUPPLY",
    RAIL = "RAIL"
}

enum AcNetworkType {
    Feeder = "Feeder",
    AcCatenary = "AcCatenary",
    AcdCatenary = "AcdCatenary"
}

interface LimitWireInfo {
    limitWireId: number
    trackCatenaryName: string
    limitWireName: string
    networkLimitAmperage: number
    limitWireTemperature: number
    limitWireCurrentFraction: Complex
    limitWireType: WireAndRailType
    limitWireRadius: number
    limitWireThermalCapacity: number
    limitWireResistance: number
    limitWireAmperage: number
    thermalConstant: number
    networkType?: AcNetworkType
}

interface BlockSsSolutionAggregator {
    objectId: {
        type: "SS"
        branchIndex: number
        coordinate: number
    }

    transformerAmperages: {
        avg: Verifiable<number>
        maxAvg1: Verifiable<number>
        maxAvg3: Verifiable<number>
        maxAvg20: Verifiable<number>
    }

    transformerLoading: {
        energy: Verifiable<Complex>
        loss: {
            working: number
            idling: number
        }
        avgCnVoltage: Verifiable<Complex>
        avgSpVoltage?: Verifiable<Complex>
        maxAvgLoadFactor1: Verifiable<number>
        maxAvgLoadFactor10: Verifiable<number>
        maxAvgLoadFactor60: Verifiable<number>
        avgLoadFactor: Verifiable<number>
        maxWindingTemp: Verifiable<number>
        maxOilTemp: Verifiable<number>
    }

    wireHeating: {
        left: AcWireHeatingSummary[]
        right: AcWireHeatingSummary[]
        rtn: AcWireHeatingSummary
    }
}

interface AcWireHeatingSummary {
    avgAmp1: Verifiable<number>
    avgAmp3: Verifiable<number>
    avgAmp20: Verifiable<number>
    avgTemp1: Verifiable<number>
    avgTemp3: Verifiable<number>
    avgTemp20: Verifiable<number>
    limitWire: LimitWireInfo
}