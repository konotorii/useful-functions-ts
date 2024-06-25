import {DateTime} from 'luxon';
import path from "path";
import fs from "fs";

export const output: {
    text: string,
    time: string,
    type: "INFO" | "LOG" | "WARN" | "DEBUG" | "ERROR" | "SUCCESS"
}[] = [{
    text: "| =--- START OF LOG ---=",
    time: DateTime.now().toISO({includeOffset: false}),
    type: "INFO",
}]

interface LoggerProps {
    outputFile?: boolean,
    filePath?: string,
    outputJson?: boolean,

}

class Logger {
    props: LoggerProps
    process: string
    log_file: string

    constructor(process: string, props?: LoggerProps) {
        this.props = props
        this.process = process
        this.log_file = `${DateTime.now().toFormat("HH mm ss dd LL yyyy")}.log`;
    }

    private appendToFile(msg: string) {
        const filePath = path.resolve(this.props.filePath + `/${this.log_file}`)

        const find = fs.existsSync(filePath)

        if (!find) fs.writeFileSync(filePath, DateTime.now().toISO({includeOffset: false}) + "| =--- START OF LOG ---=\n");

        fs.appendFileSync(filePath, msg + '\n')
    }

    private msgFormatter(msg: string, type: string) {
        return `${DateTime.now().toISO({includeOffset: false})} | [${this.process}] (${type}) ${msg}`
    }

    info(text: string) {
        if (this.props.outputJson) output.push({
            text: text,
            time: DateTime.now().toISO({includeOffset: false}),
            type: "INFO"
        });

        if (this.props.outputFile) this.appendToFile(this.msgFormatter(text, 'INFO'))

        console.log(this.msgFormatter(text, 'INFO'));
    }

    log(text: string) {
        if (this.props.outputJson) output.push({
            text: text,
            time: DateTime.now().toISO({includeOffset: false}),
            type: "LOG"
        });

        if (this.props.outputFile) this.appendToFile(this.msgFormatter(text, 'LOG'))

        console.log(this.msgFormatter(text, 'LOG'));
    }

    debug(text: string) {
        if (this.props.outputJson) output.push({
            text: text,
            time: DateTime.now().toISO({includeOffset: false}),
            type: "DEBUG"
        });

        if (this.props.outputFile) this.appendToFile(this.msgFormatter(text, 'DEBUG'))

        console.log(this.msgFormatter(text, 'DEBUG'));
    }

    success(text: string) {
        if (this.props.outputJson) output.push({
            text: text,
            time: DateTime.now().toISO({includeOffset: false}),
            type: "SUCCESS"
        });

        if (this.props.outputFile) this.appendToFile(this.msgFormatter(text, 'SUCCESS'))

        console.log(this.msgFormatter(text, 'SUCCESS'));
    }

    error(text: string) {
        if (this.props.outputJson) output.push({
            text: text,
            time: DateTime.now().toISO({includeOffset: false}),
            type: "ERROR"
        });

        if (this.props.outputFile) this.appendToFile(this.msgFormatter(text, 'ERROR'))

        console.log(this.msgFormatter(text, 'ERROR'));
    }

    warn(text: string) {
        if (this.props.outputJson) output.push({
            text: text,
            time: DateTime.now().toISO({includeOffset: false}),
            type: "WARN"
        });

        if (this.props.outputFile) this.appendToFile(this.msgFormatter(text, 'WARN'))

        console.log(this.msgFormatter(text, 'WARN'));
    }

    getOutput() {
        if (this.props.outputJson) return output
        else return Error('You need to enable JSON outputs first before you can call this function!')
    }

    clearOutput() {
        output.splice(0, output.length)
    }
}

export default Logger;